import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  // currentRoute: string = '';

  // constructor(private router: Router) {}

  // ngOnInit() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.currentRoute = event.url;
  //     }
  //   });
  // }

  // isLoginRoute(): boolean {
  //   return this.currentRoute === '/login';
  // }
}
