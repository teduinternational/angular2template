import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TutorialComponent} from './tutorial.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,TutorialComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
