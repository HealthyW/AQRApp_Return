import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {

  nombre: string = '';
  email: string = '';
  password: string = '';
  profesor: boolean = false;

  nombreVacio: boolean = false;
  emailVacio: boolean = false;
  passwordVacio: boolean = false;
  registrationFailed: boolean = false;

  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);  // Inyectar el controlador de alertas

  constructor() { }

  ngOnInit() {}

  async registrarUsuario(nombre: string, email: string, password: string, profesor: boolean) {
    this.nombreVacio = !nombre;
    this.emailVacio = !email;
    this.passwordVacio = !password;

    if (this.nombreVacio || this.emailVacio || this.passwordVacio) {
      return;
    }

    const userExists = await this.authService.usuarioExiste(email);
    if (userExists) {
      this.registrationFailed = true;  // Mostrar mensaje de error
      this.mostrarAlerta('Error', 'El correo ya está registrado.');
    } else {
      await this.authService.registrarBD(nombre, email, password, profesor);
      this.mostrarAlerta('Éxito', 'Registro exitoso. Redirigiendo al login...', true);
      this.nombre = '';
      this.email = '';
      this.password = '';
      this.profesor = false;
    }
  }

  async mostrarAlerta(header: string, message: string, success: boolean = false) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          if (success) {
            this.router.navigate(['/login']);  // Redirigir al login si el registro fue exitoso
          }
        }
      }]
    });

    await alert.present();
  }
}