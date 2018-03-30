import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleToast } from 'simpletoast';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, SimpleToast],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
