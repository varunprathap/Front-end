import {Injectable} from '@angular/core';
import {NavbarService} from '../../../shared/services/navbar.service';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../shared/services/auth.service';
import {DashwashService} from '../../../shared/classes/abstract/dashwash-service';

@Injectable()
export class WashingService extends DashwashService {


  constructor(navbarService: NavbarService, http: HttpClient,
              auth: AuthService) {
    super(navbarService, http, auth, 'washing');
  }

  setMenu() {
    this.navbarService.setNavMenu([
      {name: 'Washing bay listing', img: '/assets/automatic-wash-car.png', actionId: 'list', underline: true},
      {name: 'New bay enrollment', img: '/assets/add-circular-outlined-button.png', actionId: 'new', pointer: true},
    ]);
  }
}
