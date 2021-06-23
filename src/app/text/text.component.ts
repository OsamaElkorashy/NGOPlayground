import {  Component, Input, OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit,ControlValueAccessor {
  @Input() label:string;
  @Input() placeholder:string;
  value:string;
  disabled:boolean;


  Validators:ValidatorFn[];

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
  writeValue(obj: string): void {
    //this.textForm.controls["text"].setValue(obj);
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onchange=fn;
  }
  registerOnTouched(fn: any): void {
    this.ontouched=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    //isDisabled?this.textForm.controls["text"].disable():null;
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    //this.InitializeComponent()
  }
  // InitializeComponent() {

  //   this.Validators = [];

  //   if (this.minLength) {
  //     this.Validators.push(Validators.minLength(this.minLength))
  //   }
  //   if (this.maxLength) {
  //     this.Validators.push(Validators.maxLength(this.maxLength))
  //   }
  //   if (this.mypattern) {
  //     this.Validators.push(Validators.pattern(this.mypattern))
  //   }
  //   this.textForm.controls["text"].setValidators(this.Validators)
  //   this.textForm.updateValueAndValidity();
  // }

}
