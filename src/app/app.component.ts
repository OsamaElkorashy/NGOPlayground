import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.form = new FormGroup({
      test:new FormControl(null,[Validators.minLength(5),Validators.pattern("^[a-zA-Z]+$")])
    })
  }
  form:FormGroup;
  submit(){
    console.log(this.form)
  }

}
