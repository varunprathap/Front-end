import {Component, OnInit} from '@angular/core';
import {UserListService} from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListService]
})
export class UserListComponent implements OnInit {

  users: any[];


  displayEditDialog: boolean;
  editData: any;

  constructor(private service: UserListService) {
    this.users = Array(10).fill({}).map((value, index) => {
      return {
        id: index,
        firstName: `First Name ${index}`,
        lastName: `Last Name ${index}`,
        phone: `+7-10-1-212-123 45 6${index}`,
        carLicense: ' AAA-10-00'
      };
    });
  }

  ngOnInit() {
    this.service.setMenu();
  }

  openEditDialog(id: any) {
    this.editData = {...this.users.find(value => value.id === id)};
    this.displayEditDialog = true;
  }

  saveEl(id: any) {
    this.users[this.users.findIndex(v => v.id === id)] = this.editData;
    this.displayEditDialog = false;
  }

}
