import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  //Inputs
  @Input() modalClosed:boolean;
  @Input() message:string;
  @Input() header:string;

  //Outputs
  @Output() Confirm = new EventEmitter<null>();
  @Output() Cancel = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {
    this.modalClosed = true;
    this.message  =  "modalMessage";
    this.header = "modalHeader";
  }

}
