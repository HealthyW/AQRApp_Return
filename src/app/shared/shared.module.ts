import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsignaturasComponent
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
    AsignaturasComponent
  ]
})
export class SharedModule { }
