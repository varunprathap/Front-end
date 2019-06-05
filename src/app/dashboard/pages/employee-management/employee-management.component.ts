import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {NavElement} from '../../../shared/interfaces/nav-element';
import {Subscription} from 'rxjs';
import {NavbarService} from '../../../shared/services/navbar.service';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
import {DashwashList} from '../../../shared/classes/abstract/dashwash-list';

@AutoUnsubscribe()
@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeManagementComponent extends DashwashList {

  constructor(service: EmployeeService, navbarService: NavbarService) {
    super(service, navbarService);
  }

}
