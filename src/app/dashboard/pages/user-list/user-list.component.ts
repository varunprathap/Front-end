import {Component, OnInit} from '@angular/core';
import {UserListService} from './user-list.service';
import {DashwashList} from '../../../shared/classes/abstract/dashwash-list';
import {NavbarService} from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListService]
})
export class UserListComponent extends DashwashList {

  constructor(service: UserListService, navbarService: NavbarService) {
    super(service, navbarService);
  }


}
