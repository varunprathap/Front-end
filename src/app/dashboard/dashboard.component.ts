import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-sidebar>
      <router-outlet></router-outlet>
    </app-sidebar>`,
  styles: [``]
})
export class DashboardComponent {

}
