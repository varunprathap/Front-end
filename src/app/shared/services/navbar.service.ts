import {Injectable, OnDestroy} from '@angular/core';
import {NavElement} from '../interfaces/nav-element';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService implements OnDestroy {

  navElements: NavElement[];

  navClick: Subject<NavElement>;

  constructor() {
    this.navClick = new Subject();
  }

  setNavMenu(elements: NavElement[]) {
    this.navElements = elements;
  }

  ngOnDestroy(): void {
      this.navClick.complete();
  }
}
