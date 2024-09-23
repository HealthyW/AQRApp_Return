import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HomeComponent,
    CursosComponent,
    BuscarComponent,
    ConfiguracionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class PagesModule { }
