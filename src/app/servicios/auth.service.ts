import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);     // estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();            // hacerlo observable

  private usuarioSubject = new BehaviorSubject<string>('');                 // guardar usuario
  usuario$ = this.usuarioSubject.asObservable();                             // hacerlo observable

  private loginFailedSubject = new BehaviorSubject<boolean>(false);       // estado de login fallido
  loginFailed$ = this.loginFailedSubject.asObservable();                      // hacerlo observable

  webservice = inject(WebService);

  async BuscarBD(usuario: string, clave: string) {
    const url = 'https://66f610b9436827ced975d4b7.mockapi.io/Cuentas'
    const res = await this.webservice.request('GET', url, 'users') as Array<{ 
      id: string, 
      email: string,
      name: string,
      pass: string 
    }>;

    const user = res.find(u => u.email === usuario && u.pass === clave);
    if (user) {
      console.log('Login correcto');
      console.log(user);
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(user.name);
      this.loginFailedSubject.next(false);
    } else {
      this.loginFailedSubject.next(true);
      this.isAuthenticatedSubject.next(false);
    }
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.usuarioSubject.next('');
    this.loginFailedSubject.next(false);
    console.log('Logout');
  }

  IsLoggedIn(){
    return this.isAuthenticated$;
  }

}
