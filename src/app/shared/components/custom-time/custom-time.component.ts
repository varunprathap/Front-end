import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-time',
  templateUrl: './custom-time.component.html',
  styleUrls: ['./custom-time.component.scss']
})
export class CustomTimeComponent implements OnInit, AfterViewInit {

  get value(): Date {
    return this.val;
  }

  @Input() set value(value: Date) {
    if (value) {
      this.val = new Date(value);
    }
  }


  private get ownValue(): Date {
    return this.val;
  }

  private set ownValue(value: Date) {
    this.valueChange.emit(value);
    this.val = value;
  }


  @Output() valueChange = new EventEmitter();

  @Input() id = '';
  @Input() placeholder = '';
  private val: Date;
  @Input() disabled = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();

  }

}
