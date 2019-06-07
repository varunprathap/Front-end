import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavbarService} from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  display:boolean=false
  constructor(
    public router: Router,
    public service: NavbarService
  ) { }

  ngOnInit() {
  }
  displayWashMenu(){
    this.display=true
  }

}
