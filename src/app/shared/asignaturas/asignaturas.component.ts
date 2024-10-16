import { Component, OnInit, Input, ViewChild, ElementRef, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import QRious from 'qrious';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss'],
})
export class AsignaturasComponent  implements OnInit {

  profesor:boolean = false;
  isVisible = false;
  isVisibleQr = false;
  qrData: string= '';
  usuario: string= '';


  @ViewChild('qrCanvas') qrCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() spanText: string = 'Clase sin nombre';
  @Input() divClass: string = 'custom-div';

  constructor(private authService: AuthService) { }

  ngOnInit():void {
    this.authService.profesor$.subscribe(isProfesor => {
      this.profesor = isProfesor;
    });
    this.authService.usuario$.subscribe(usuario =>{
      this.usuario = usuario;
    });
  }

  toggleDiv(){
    this.isVisible = !this.isVisible;
  }

  /*
  activateDivQr(){
    this.isVisibleQr = true;
  }*/

  generarQR() { 
    const fechaActual = new Date();
    // Formatear la fecha con guiones
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses son de 0 a 11, por eso sumamos 1
    const día = String(fechaActual.getDate()).padStart(2, '0');
    // Formatear la hora con :
    const horas = String(fechaActual.getHours()).padStart(2, '0');
    const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
    const segundos = String(fechaActual.getSeconds()).padStart(2, '0');
    
    const fechaHora = `${año}-${mes}-${día}_${horas}:${minutos}:${segundos}`;
    this.qrData = `http://localhost:8100/asistencia/${this.spanText}/${this.usuario}/${fechaHora}`;

    this.createQR();
    this.isVisibleQr = true;
  }

  createQR() {
    const qr = new QRious({
      element: this.qrCanvas.nativeElement,
      value: `Asignatura ID: ${this.spanText}`,
      size: 200
    });
  }

}
