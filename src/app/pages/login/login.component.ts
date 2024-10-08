import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  usuario: string = '';
  clave: string = '';
 

  private authService = inject(AuthService)
  private router= inject(Router);
  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean;


  constructor() { }

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed);
  }

  isLoading: boolean= false;
  async login(usuario: string,clave: string) {
    this.isLoading = true;
    await this.authService.BuscarBD(usuario, clave);
    this.isLoading = false;

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.usuario = '';
        this.clave = '';
        this.router.navigate(['/home']);
      } else {
        this.loginFailed = true;
      }
    })
    
  }
}
