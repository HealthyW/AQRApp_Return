import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: '**', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
