import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {TutorialComponent} from './tutorial.component';
import {FormsModule} from '@angular/forms'
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,TutorialComponent,ExponentialStrengthPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
