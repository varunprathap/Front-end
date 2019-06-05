import {Component, OnInit} from '@angular/core';
import {ServiceService} from './service.service';
import {NavbarService} from '../../../shared/services/navbar.service';
import {DashwashList} from '../../../shared/classes/abstract/dashwash-list';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [ServiceService]
})
export class ServiceComponent extends DashwashList {

  options: string[];

  constructor(service: ServiceService, navbarService: NavbarService) {
    super(service, navbarService);
    this.options = [
      'SUV',
      'Sedan',
      'Truck'
    ];
  }
}
