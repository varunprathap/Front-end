import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule} from 'primeng/chart';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {DashboardComponent} from './dashboard.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { DashboardContentComponent } from './pages/dashboard-content/dashboard-content.component';
import { WashingBayComponent } from './pages/washing-bay/washing-bay.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { ServiceComponent } from './pages/service/service.component';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {MomentModule} from 'ngx-moment';
import {CalendarModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    EmployeeManagementComponent,
    DashboardContentComponent,
    WashingBayComponent,
    UserListComponent,
    ServiceComponent
  ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    DialogModule,
    ChartModule,
    FormsModule,
    SharedModule,
    MomentModule,
    CalendarModule
  ]
})
export class DashboardModule {
}
