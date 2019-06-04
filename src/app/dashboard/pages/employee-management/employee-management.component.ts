import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeManagementComponent implements OnInit {

  emplList: any[];

  displayEditDialog: boolean;
  editData: any;

  constructor(private service: EmployeeService) {
    this.emplList = [
      {
        id: 'some id',
        firstName: 'First Name',
        lastName: 'Last Name',
        workDay: '03 June 2019',
        workingHours: '12:06',
        status: 'red',
        employee_id: 'Account Manager'
      },
      {
        id: 'some id 2',
        firstName: 'First Name 2',
        lastName: 'Last Name 2',
        workDay: '04 June 2019',
        workingHours: '15:06',
        status: 'green',
        employee_id: 'Account Manager'
      }
    ];
  }

  openEditDialog(id: any) {
    this.editData = {...this.emplList.find(value => value.id === id)};
    this.displayEditDialog = true;
  }

  saveEl(id: any) {
    this.emplList[this.emplList.findIndex(v => v.id === id)] = this.editData;
    this.displayEditDialog = false;
  }

  ngOnInit() {
    this.service.setMenu();
  }

}
