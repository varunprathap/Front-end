import {Injectable, OnInit} from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';

@Injectable()
export class DashboardService {

  constructor(private navbarService: NavbarService) {
  }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'Statistics of cars', img: '/assets/car.png', actionId: 'cars'},
      {name: 'Wash Time', img: '/assets/time wash.png', actionId: 'wash'},
      {name: 'User statistics', img: '/assets/analytics.png', actionId: 'user'},
      {name: 'Today\'s statistics', img: '/assets/calendar (2).png', actionId: 'today'},
    ]);
  }
}
