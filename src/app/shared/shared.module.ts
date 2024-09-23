import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsignaturasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsignaturasComponent
  ]
})
export class SharedModule { }
