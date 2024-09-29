import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent  implements OnInit {

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

  public data = [
    'PGY4121_001D',
    'PY41447_004D',
    'ASY4131_001D',
    'INI5111_003D',
    'CSY4111_001D',
    'INI5111_001D',
    'MAT4140_003D',
    'EAY4450_001D',
    'PGY4121_002D',
    'INI5111_002D',
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

}
