import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomDateComponent} from './components/custom-date/custom-date.component';
import {CalendarModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {CustomTimeComponent} from './components/custom-time/custom-time.component';

@NgModule({
  declarations: [CustomDateComponent, CustomTimeComponent],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule
  ], exports: [CustomDateComponent, CustomTimeComponent]
})
export class SharedModule {
}

