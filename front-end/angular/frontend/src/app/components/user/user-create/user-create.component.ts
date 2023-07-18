import { HeaderService } from './../../template/header/header.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
        title: 'Register',
        icon: 'login',
        routeUrl: '/register'
      }
    }
}
