import { HeaderService } from './../../components/template/header/header.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from './login-data.model';

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

  log: LoginData = {
    username: '',
    password: ''
  }

  cancel(): void {
    this.router.navigate([''])
  }

  login(): void {
    // Lógica de autenticação
    // ...

    // Redirecionar para as rotas dentro do router-outlet após o login
    this.router.navigate(['/home']);
  }
}
