import { HeaderService } from './../../components/template/header/header.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
        title: 'Login',
        icon: 'login',
        routeUrl: '/login'
      }
  }

  login(): void {
    // Lógica de autenticação
    // ...

    // Redirecionar para as rotas dentro do router-outlet após o login
    this.router.navigate(['/home']);
  }
}
