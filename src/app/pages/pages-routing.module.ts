import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { authGuard } from '../guard/auth.guard';
import { redirectIfAuthGuard } from '../guard/redirect-if-auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [redirectIfAuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [redirectIfAuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [authGuard]},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'recuperar', component: RecuperarComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: '**', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
