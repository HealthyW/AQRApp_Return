import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss'],
})
export class AsignaturasComponent  implements OnInit {

  profesor:boolean = false;
  isVisible = false;
  isVisibleQr = false;

  @Input() spanText: string = 'Clase sin nombre';
  @Input() divClass: string = 'custom-div';

  constructor(private authService: AuthService) { }

  ngOnInit():void {
    this.authService.profesor$.subscribe(isProfesor => {
      this.profesor = isProfesor;
    });
  }

  toggleDiv(){
    this.isVisible = !this.isVisible;
  }

  activateDivQr(){
    this.isVisibleQr = true;
  }

}
