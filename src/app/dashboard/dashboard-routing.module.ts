import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {EmployeeManagementComponent} from './pages/employee-management/employee-management.component';
import {DashboardContentComponent} from './pages/dashboard-content/dashboard-content.component';
import {WashingBayComponent} from './pages/washing-bay/washing-bay.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', pathMatch: 'full', component: DashboardContentComponent},
      {path: 'employee-management', component: EmployeeManagementComponent},
      {path: 'washing-bay', component: WashingBayComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
