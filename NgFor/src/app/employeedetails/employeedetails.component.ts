import { Component } from '@angular/core';
@Component({
    selector: 'employee-details',
    templateUrl: './employeedetails.component.html',
    styleUrls: ['./employeedetails.component.css']
})
export class EmployeeDetails {
    employees: any[];

    constructor() {
        this.employees = [
            { code: 'emp101', name: 'kumar', gender: 'male', annualsalary: 5500, dateofbirth: '5/6/1998' },
            { code: 'emp102', name: 'kush', gender: 'male', annualsalary: 6500, dateofbirth: '5/8/1996' },
            { code: 'emp103', name: 'shubhendu', gender: 'male', annualsalary: 8500, dateofbirth: '4/12/1993' },
            { code: 'emp104', name: 'shubhashish', gender: 'male', annualsalary: 10500, dateofbirth: '1/6/2001' },
         
        ];
    }

    getEmployees():void {
        this.employees = [
            { code: 'emp101', name: 'kumar', gender: 'male', annualsalary: 5500, dateofbirth: '5/6/1998' },
            { code: 'emp102', name: 'kush', gender: 'male', annualsalary: 6500, dateofbirth: '5/8/1996' },
            { code: 'emp103', name: 'shubhendu', gender: 'male', annualsalary: 8500, dateofbirth: '4/12/1993' },
            { code: 'emp104', name: 'shubhashish', gender: 'male', annualsalary: 10500, dateofbirth: '1/6/2001' },
            { code: 'emp105', name: 'jaya', gender: 'female', annualsalary: 9500, dateofbirth: '5/09/2004' },
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}   