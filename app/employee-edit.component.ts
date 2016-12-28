import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './services/employee.service'
import { Subscription } from 'rxjs';
@Component({
    selector: 'employee-edit-component',
    templateUrl: './app/employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employee: any;
    constructor(
        private router: Router, private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) {

    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });

        this.employeeService.GetSingle(this._id).subscribe((data) => {
            this.employee = data;
        });

    }

    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    SaveForm() {
        this.employeeService.Update(this._id, this.employee).subscribe(response => {
            if (response) {
                alert('Save success');
                this.router.navigate(['/employees']);
            }
        })
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}