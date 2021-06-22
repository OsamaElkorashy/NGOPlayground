import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.css']
})
export class FormButtonsComponent implements OnInit {
  @Input() saveText:string;
  @Input() initialSaveText:string;
  @Input() cancelText:string;
  @Input() deleteText:string;
  @Input() disabledButtons:any;

  @Output() InitialSave = new EventEmitter<null>();
  @Output() Save = new EventEmitter<null>();
  @Output() Cancel = new EventEmitter<null>();
  @Output() Delete = new EventEmitter<null>();



  constructor() {
    this.saveText = "ارسال الطلب";
    this.initialSaveText = " حفظ مبدئي";
    this.deleteText = "حذف";
    this.cancelText = "الغاء";
  }

  ngOnInit(): void {
  }
}
