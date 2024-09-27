import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  usuario: string;
  private authService = inject(AuthService);

  subscriptionAuthService: Subscription;
  constructor() { }

  ngOnInit() {}

}
