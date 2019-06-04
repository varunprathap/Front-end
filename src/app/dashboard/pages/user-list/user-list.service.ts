import { Injectable } from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';

@Injectable()
export class UserListService {

  constructor(private navbarService: NavbarService) { }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'User listing', img: '/assets/analytics.png'},
      {name: 'Statistics', img: '/assets/calendar (2).png'},
    ]);
  }
}
