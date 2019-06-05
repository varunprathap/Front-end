import {Injectable} from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../shared/services/auth.service';
import {DashwashService} from '../../../shared/classes/abstract/dashwash-service';

@Injectable()
export class EmployeeService extends DashwashService {

  constructor(navbarService: NavbarService, http: HttpClient,
              auth: AuthService) {
    super(navbarService, http, auth, 'employee');
  }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'Employee list and details', img: '/assets/clipboard1.png', actionId: 'list', underline: true},
      {
        name: 'New employee enrollment',
        img: '/assets/add-circular-outlined-button.png',
        actionId: 'new',
        pointer: true
      },
    ]);
  }
}
