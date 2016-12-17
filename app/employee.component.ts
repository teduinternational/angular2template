import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
@Component({
    selector: 'employee-list',
    templateUrl: './app/employee.component.html',
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    constructor(private employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
            console.log(response);
        }, error => {
            console.log(error);
        });
    }


}