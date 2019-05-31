import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  data: any;
  options: any;

  constructor() {
  }

  ngOnInit() {
    this.data = {
      labels: Array(24).fill('').map((value, index) => {
        return `${index}:00`;
      }),
      datasets: [{
        data: Array(24).fill(0).map(value => {
          return Math.round(Math.random() * 100);
        }), label: 'Cars', backgroundColor: 'rgb(183, 234, 255)'
      }]
    };
    console.log(this.data);
  }

}
