import {Component, OnDestroy, OnInit} from '@angular/core';
import {WashingService} from './washing.service';
import {Subscription} from 'rxjs';
import {EmployeeService} from '../employee-management/employee.service';
import {NavbarService} from '../../../shared/services/navbar.service';
import {NavElement} from '../../../shared/interfaces/nav-element';
import {DashwashList} from '../../../shared/classes/abstract/dashwash-list';

@Component({
  selector: 'app-washing-bay',
  templateUrl: './washing-bay.component.html',
  styleUrls: ['./washing-bay.component.scss'],
  providers: [WashingService]
})
export class WashingBayComponent extends DashwashList {

  constructor(service: WashingService, navbarService: NavbarService) {
    super(service, navbarService);
  }

}
