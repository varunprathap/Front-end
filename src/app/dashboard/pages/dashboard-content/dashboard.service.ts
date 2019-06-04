import {Injectable, OnInit} from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';

@Injectable()
export class DashboardService {

  constructor(private navbarService: NavbarService) {
  }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'Statistics of cars', img: '/assets/car.png'},
      {name: 'Wash Time', img: '/assets/time wash.png'},
      {name: 'User statistics', img: '/assets/analytics.png'},
      {name: 'Today\'s statistics', img: '/assets/calendar (2).png'},
    ]);
  }
}
