import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// decorator that says this is an angular module.
@NgModule({
  // declairs what components are available within application
  declarations: [
    AppComponent
  ],
  // can also import other modules
  imports: [
    BrowserModule, // so our code can be displayed in browser
    AppRoutingModule, // for routing
    HttpClientModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // set of components that are bootstraped when app is bootstraped
})
export class AppModule { }
