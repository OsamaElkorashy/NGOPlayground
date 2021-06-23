import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting:  TextComponent,
    multi: true
  }]
})
export class TextComponent implements OnInit,ControlValueAccessor {

  Form:FormGroup;
  @Input() minLength:number;
  @Input() maxLength:number;
  @Input() mypattern:string;
  @Input() label:string;
  @Input() placeholder:string;

  Validators:ValidatorFn[];

  onchange:(value)=>void;
  ontouched:()=>void;
  disabled:boolean;
  constructor() {
   }
  writeValue(obj: any): void {
    this.Form.controls["Form"].setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onchange=fn;
  }
  registerOnTouched(fn: any): void {
    this.ontouched=fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled?this.Form.controls["Form"].disable():null;
  }

  ngOnInit(): void {
    this.InitializeComponent()
  }
  InitializeComponent() {
    this.Form = new FormGroup({
      Form:new FormControl()
    });
    this.Validators = [];

    if (this.minLength) {
      this.Validators.push(Validators.minLength(this.minLength))
    }
    if (this.maxLength) {
      this.Validators.push(Validators.maxLength(this.maxLength))
    }
    if (this.mypattern) {
      this.Validators.push(Validators.pattern(this.mypattern))
    }
    this.Form.controls["Form"].setValidators(this.Validators)
    this.Form.updateValueAndValidity();
  }


}
