import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MateriaComponent } from './materia/materia.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsignaturasComponent,
    MateriaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsignaturasComponent,
    MateriaComponent
  ]
})
export class SharedModule { }
