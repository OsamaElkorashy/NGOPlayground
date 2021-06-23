import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { TextComponent } from './text/text.component';
import { DateComponent } from './date/date.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    TextComponent,
    DateComponent,
    ConfirmationModalComponent,
    FormButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
