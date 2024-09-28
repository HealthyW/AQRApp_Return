import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss'],
})
export class MateriaComponent  implements OnInit {

  esVisible = false
  profesor:boolean = false;
  @Input() materia: string = 'Clase sin nombre';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.profesor$.subscribe(isProfesor => {
      this.profesor = isProfesor;
    });
  }

  toggleContAsig(){
    this.esVisible = !this.esVisible;
  }

}
