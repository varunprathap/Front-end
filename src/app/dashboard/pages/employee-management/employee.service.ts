import { Injectable } from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';

@Injectable()
export class EmployeeService {

  constructor(private navbarService: NavbarService) { }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'Employee list and details', img: '/assets/clipboard1.png'},
      {name: 'New employee enrollment', img: '/assets/add-circular-outlined-button.png'},
    ]);
  }
}
