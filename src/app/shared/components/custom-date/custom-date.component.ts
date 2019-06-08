import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-date',
  templateUrl: './custom-date.component.html',
  styleUrls: ['./custom-date.component.scss']
})
export class CustomDateComponent implements OnInit {
  get value(): Date {
    return this.val;
  }

  @Input() set value(value: Date) {
    if (value) {
      this.val = new Date(value);
    }  }


  get ownValue(): Date {
    return this.val;
  }

  set ownValue(value: Date) {
    this.valueChange.emit(value);
    this.val = value;
  }


  @Output() valueChange = new EventEmitter();

  @Input() id = '';
  @Input() placeholder = '';
  private val: Date;
  @Input() disabled = false;

  constructor() {
  }

  ngOnInit() {
  }


}
