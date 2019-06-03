import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {EmployeeManagementComponent} from './pages/employee-management/employee-management.component';
import {DashboardContentComponent} from './pages/dashboard-content/dashboard-content.component';
import {WashingBayComponent} from './pages/washing-bay/washing-bay.component';
import {UserListComponent} from './pages/user-list/user-list.component';
import {ServiceComponent} from './pages/service/service.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', pathMatch: 'full', component: DashboardContentComponent},
      {path: 'employee-management', component: EmployeeManagementComponent},
      {path: 'washing-bay', component: WashingBayComponent},
      {path: 'user-list', component: UserListComponent},
      {path: 'service', component: ServiceComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
