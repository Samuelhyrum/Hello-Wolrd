import { HeaderService } from './../../template/header/header.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserData } from '../user-data.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
        title: 'Register',
        icon: 'create',
        routeUrl: '/register'
      }
    }


  user: UserData = {
    username: '',
    password: ''
  }

  createUser(): void {
    this.router.navigate(['/register'])
  }

  newUser(): void {
    // Lógica de autenticação
    // ...

    // Redirecionar para as rotas dentro do router-outlet após o login
    this.router.navigate(['/home']);
  }
}
