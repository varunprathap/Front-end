import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  data: any;
  options: any;
  date: Date;

  constructor() {
    this.date = new Date();
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
    this.options = {
      legend: {
        labels: {
          fontColor: '#0042c5',
          fontSize: 14,
          fontFamily: 'Comfortaa, serif'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: '#0042c5',
            fontSize: 14,
            fontFamily: 'Comfortaa, serif'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: '#0042c5',
            fontSize: 14,
            fontFamily: 'Comfortaa, serif'
          }
        }]
      }
    };
    console.log(this.data);
  }

  ngOnInit() {

  }

}
