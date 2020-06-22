import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--navbar-->
  <app-navbar></app-navbar>

  
  
  <!-- routes-->
  <router-outlet></router-outlet>

  
  `
})
export class AppComponent {
 
}
