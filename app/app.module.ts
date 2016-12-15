import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee.component'
import { EmployeeService } from './services/employee.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations:
  [
    AppComponent,
    EmployeeListComponent,

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
