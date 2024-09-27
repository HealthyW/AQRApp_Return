import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
