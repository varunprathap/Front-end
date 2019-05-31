import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {

  emplList: any[];

  constructor() {
    this.emplList = [
      {
        member: {
          img: '/assets/035-user.png',
          fullname: 'Name and Surname',
          emplId: 'Account Manager'
        },
        workDateTime: new Date(),
        status: 0,
      },
      {
        member: {
          img: '/assets/035-user.png',
          fullname: 'Name and Surname',
          emplId: 'Account Manager'
        },
        workDateTime: new Date(),
        status: 0,
      }
    ];
  }

  ngOnInit() {
  }

}
