import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() label:string;
  @Input() placeholder:string;
  @Input() minDate:Date;
  @Input() maxDate:Date;
  @Input() dateTime:boolean;

  disabled:boolean;
  value:any;

  onchange:(value)=>void;
  ontouched:()=>void;

  constructor(
    @Optional() @Self() public ngControl: NgControl,
  ) {
    // Replace the provider from above with this.
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onchange=fn;
  }
  registerOnTouched(fn: any): void {
    this.ontouched=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    debugger;
    console.log(this.minDate)
  }

}
