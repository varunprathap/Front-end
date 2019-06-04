import { Injectable } from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';

@Injectable()
export class ServiceService {

  constructor(private navbarService: NavbarService) { }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'Service listing', img: '/assets/automatic-wash-car.png'},
      {name: 'New service enrollment', img: '/assets/add-circular-outlined-button.png'},
    ]);
  }
}
