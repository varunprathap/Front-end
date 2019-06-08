import { Injectable } from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';
import {DashwashService} from '../../../shared/classes/abstract/dashwash-service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../shared/services/auth.service';

@Injectable()
export class UserListService extends  DashwashService {

  constructor( navbarService: NavbarService, http: HttpClient,
               auth: AuthService) {
    super(navbarService, http, auth, 'UserList');
  }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'User listing', img: '/assets/analytics.png', actionId: 'listing', underline: true},
      {name: 'New user',  img: '/assets/add-circular-outlined-button.png', actionId: 'new', pointer: true},
      {name: 'Statistics', img: '/assets/calendar (2).png', actionId: 'statistics'},
    ]);
  }
}
