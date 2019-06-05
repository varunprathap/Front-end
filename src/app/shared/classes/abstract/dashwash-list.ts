import {Subscription} from 'rxjs';
import {NavbarService} from '../../services/navbar.service';
import {NavElement} from '../../interfaces/nav-element';
import {OnDestroy, OnInit} from '@angular/core';
import {DashwashService} from './dashwash-service';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
export abstract class DashwashList implements OnDestroy, OnInit {
  changes: Subscription;

  displayEditDialog: boolean;
  editData: any;
  new: boolean;

  constructor(public service: DashwashService, protected navbarService: NavbarService) {
    this.changes = this.navbarService.navClick.subscribe((value: NavElement) => {
      if (value.actionId === 'new') {
        this.openNewDialog();
      }
    });
  }

  openEditDialog(el: any) {
    this.new = false;
    this.editData = {...el};
    this.displayEditDialog = true;
  }

  openNewDialog() {
    this.new = true;
    this.editData = {};
    this.displayEditDialog = true;
  }

  saveEl() {
    if (this.new) {
      this.service.add(this.editData);
    } else {
      this.service.edit(this.editData);
    }
    this.displayEditDialog = false;
  }

  ngOnInit() {
    this.service.setMenu();
  }

  ngOnDestroy(): void {
  }

}
