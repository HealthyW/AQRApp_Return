import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

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

  private authService = inject(AuthService);
  private router = inject(Router);
  registrationFailed: boolean = false;

  constructor() { }

  ngOnInit() {}

  async registrarUsuario(nombre: string, email: string, password: string, profesor: boolean) {
    // Primero, verifica si el correo ya existe
    const userExists = await this.authService.usuarioExiste(email);
    if (userExists) {
      this.registrationFailed = true; // Mostrar mensaje de error si ya existe
    } else {
      // Registrar usuario si no existe
      await this.authService.registrarBD(nombre, email, password, profesor);
      this.router.navigate(['/login']); // Redirigir al login tras el registro exitoso
    }
  }
}