import { HeaderService } from './../../components/template/header/header.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../components/user/user-data.model';

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

  user: UserData = {
    username: '',
    password: ''
  }

  createUser(): void {
    this.router.navigate(['/register'])
  }

  login(): void {
    // Lógica de autenticação
    // ...

    // Redirecionar para as rotas dentro do router-outlet após o login
    this.router.navigate(['/home']);
  }
}
