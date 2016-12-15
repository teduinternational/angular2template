import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    GetList(): any[] {
        let employees: any[] = [
            { Id: 1, Name: "Nguyen Van Tuan" },
            { Id: 2, Name: "Nguyen Thi Huong" },
            { Id: 3, Name: "Tran Van Hai" },
            { Id: 4, Name: "Tran Van Hai 1" },
            { Id: 5, Name: "Tran Van Hai 2" },
        ];
        return employees;
    }
}