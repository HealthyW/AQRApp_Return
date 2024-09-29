import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  isAuthenticated: boolean = false;
  private authService = inject(AuthService)

  constructor() { }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(
      (isAuth: boolean) => {
        this.isAuthenticated = isAuth;
      }
    );
  }

}
