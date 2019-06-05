import { Injectable } from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';
import {DashwashService} from '../../../shared/classes/abstract/dashwash-service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../shared/services/auth.service';

@Injectable()
export class ServiceService extends  DashwashService {

  constructor( navbarService: NavbarService, http: HttpClient,
               auth: AuthService) {
    super(navbarService, http, auth, 'service');
  }
  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'Service listing', img: '/assets/automatic-wash-car.png', actionId: 'listing', underline: true},
      {name: 'New service enrollment', img: '/assets/add-circular-outlined-button.png', actionId: 'new', pointer: true},
    ]);
  }
}
