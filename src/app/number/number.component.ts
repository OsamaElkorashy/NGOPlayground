import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting:  NumberComponent,
    multi: true
  }]
})
export class NumberComponent implements OnInit,ControlValueAccessor {
  numberForm:FormGroup;
  @Input() minLength:number;
  @Input() maxLength:number;
  @Input() min:number;
  @Input() max:number;


  onchange:(value)=>void;
  ontouched:()=>void;
  disabled:boolean;
  constructor() {
   }
  writeValue(obj: any): void {
    this.numberForm.controls["number"].setValue(obj);
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
    this.numberForm = new FormGroup({
      number:new FormControl()
    });
    if (this.minLength) {
      this.numberForm.controls["number"].setValidators(Validators.minLength(this.minLength))
    }
    if (this.maxLength) {
      this.numberForm.controls["number"].setValidators(Validators.maxLength(this.maxLength))
    }
    if (this.min) {
      this.numberForm.controls["number"].setValidators(Validators.min(this.min))
    }
    if (this.max) {
      this.numberForm.controls["number"].setValidators(Validators.max(this.max))
    }
    this.numberForm.controls["number"].updateValueAndValidity();
  }
  print(){
    console.log(this.numberForm);
  }

}
