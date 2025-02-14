import { UserService } from './../user.service';
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
  constructor(private router: Router, private headerService: HeaderService, private userService: UserService) {
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

  newUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage('Novo usuario criado!')
      this.router.navigate(['/login']);
    })  
  }
}
