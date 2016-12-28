import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { EmployeeListComponent } from './employee.component'
import { HomeComponent } from './home.component';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { NotFoundComponent } from './notfound.component';
import { EmployeeDetailComponent } from './employee-detail.component'
import { EmployeeOverviewComponent } from './employee-overview.component'
import { EmployeeProjectsComponent } from './employee-projects.component'
import { LoginComponent } from './login.component'
import {LoginService} from './services/login.service';
import {CheckLoginGuard} from './guards/check-login.guard';
import {CheckSaveFormGuard} from './guards/check-save-form.guard';
import { EmployeeEditComponent } from './employee-edit.component'

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations:
  [
    AppComponent,
    EmployeeListComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeeProjectsComponent,
    EmployeeOverviewComponent,
    EmployeeDetailComponent,
    LoginComponent,
    EmployeeEditComponent

  ],
  providers: [EmployeeService,LoginService,CheckLoginGuard,CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
