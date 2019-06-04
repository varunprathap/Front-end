import { Injectable } from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';

@Injectable()
export class WashingService {

  constructor(private navbarService: NavbarService) { }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'Washing bay listing', img: '/assets/automatic-wash-car.png'},
      {name: 'New bay enrollment', img: '/assets/add-circular-outlined-button.png'},
    ]);
  }
}
