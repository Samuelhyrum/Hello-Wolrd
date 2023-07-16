import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  showLogin = false;

  constructor(private router: Router) {}

  goToLogin(): void {
    this.showLogin = true;
    this.router.navigate([{ outlets: { loginOutlet: ['login'] } }]);
  }
}
