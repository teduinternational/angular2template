import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service'
@Component({
    selector: 'employee-add-component',
    templateUrl: './app/employee-add.component.html'
})
export class EmployeeAddComponent implements OnInit {
    public _id: number;
    public employee: any;
    constructor(
        private router: Router, private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) {

    }
    ngOnInit() {
        this.employee = {};
    }

    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    SaveForm() {
        this.employeeService.Add(this.employee).subscribe(response => {
            if (response) {
                alert('add success');
                this.router.navigate(['/employees']);
            }
        })
    }
}