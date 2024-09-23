import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss'],
})
export class AsignaturasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() spanText: string = 'Clase sin nombre';
  @Input() divClass: string = 'custom-div';

}
