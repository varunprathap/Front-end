import {Component, OnInit} from '@angular/core';
import {WashingService} from './washing.service';

@Component({
  selector: 'app-washing-bay',
  templateUrl: './washing-bay.component.html',
  styleUrls: ['./washing-bay.component.scss'],
  providers: [WashingService]
})
export class WashingBayComponent implements OnInit {

  spotList: any[];

  displayEditDialog: boolean;
  editData: any;

  constructor(private service: WashingService) {
  }

  ngOnInit() {
    this.service.setMenu();
    this.spotList = [
      {
        id: 'some id',
        spotName: 'SpotName1',
        spotNumber: 1
      },
      {
        id: 'some id 2',
        spotName: 'SpotName2',
        spotNumber: 2
      },
      {
        id: 'some id 3',
        spotName: 'SpotName3',
        spotNumber: 3
      },
      {
        id: 'some id 4',
        spotName: 'SpotName4',
        spotNumber: 4
      },
    ];
  }


  openEditDialog(id: any) {
    this.editData = {...this.spotList.find(value => value.id === id)};
    this.displayEditDialog = true;
  }

  saveEl(id: any) {
    this.spotList[this.spotList.findIndex(v => v.id === id)] = this.editData;
    this.displayEditDialog = false;
  }
}
