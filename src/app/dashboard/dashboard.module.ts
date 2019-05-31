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

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    EmployeeManagementComponent,
    DashboardContentComponent,
    WashingBayComponent
  ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule
  ]
})
export class DashboardModule {
}
