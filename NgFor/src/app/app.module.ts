import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeDetails } from './employeedetails/employeedetails.component'
import { EmployeeDetailsPipe } from './employeedetails/employeedetails.pipe'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, EmployeeDetails, EmployeeDetailsPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
