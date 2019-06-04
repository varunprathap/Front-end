import {Component, OnInit} from '@angular/core';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [ServiceService]
})
export class ServiceComponent implements OnInit {

  options: any[];
  services: any[];

  displayEditDialog: boolean;
  editData: any;

  constructor(private service: ServiceService) {
    this.options = [
      'SUV',
      'Sedan',
      'Truck'
    ];

    this.services = [
      {
        id: 'some id',
        serviceName: 'lorem',
        serviceType: 'Sedan'
      },
      {
        id: 'some id 2',
        serviceName: 'lorem 2',
        serviceType: 'Truck'
      }
    ];
  }

  ngOnInit() {
    this.service.setMenu();
  }

  openEditDialog(id: any) {
    this.editData = {...this.services.find(value => value.id === id)};
    this.displayEditDialog = true;
  }

  saveEl(id: any) {
    this.services[this.services.findIndex(v => v.id === id)] = this.editData;
    this.displayEditDialog = false;
  }

}
