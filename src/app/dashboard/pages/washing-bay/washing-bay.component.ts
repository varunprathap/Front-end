import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-washing-bay',
  templateUrl: './washing-bay.component.html',
  styleUrls: ['./washing-bay.component.scss']
})
export class WashingBayComponent implements OnInit {

  spotList: any[];

  constructor() {
  }

  ngOnInit() {
    this.spotList = [
      {
        spotName: 'SpotName1',
        spotNumber: 1
      },
      {
        spotName: 'SpotName2',
        spotNumber: 2
      },
      {
        spotName: 'SpotName3',
        spotNumber: 3
      },
      {
        spotName: 'SpotName4',
        spotNumber: 4
      },
    ];
  }

}
