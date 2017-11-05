"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EmployeeDetails = (function () {
    function EmployeeDetails() {
        this.employees = [
            { code: 'emp101', name: 'kumar', gender: 'male', annualsalary: 5500, dateofbirth: '5/6/1998' },
            { code: 'emp102', name: 'kush', gender: 'male', annualsalary: 6500, dateofbirth: '5/8/1996' },
            { code: 'emp103', name: 'shubhendu', gender: 'male', annualsalary: 8500, dateofbirth: '4/12/1993' },
            { code: 'emp104', name: 'shubhashish', gender: 'male', annualsalary: 10500, dateofbirth: '1/6/2001' },
        ];
    }
    EmployeeDetails.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp101', name: 'kumar', gender: 'male', annualsalary: 5500, dateofbirth: '5/6/1998' },
            { code: 'emp102', name: 'kush', gender: 'male', annualsalary: 6500, dateofbirth: '5/8/1996' },
            { code: 'emp103', name: 'shubhendu', gender: 'male', annualsalary: 8500, dateofbirth: '4/12/1993' },
            { code: 'emp104', name: 'shubhashish', gender: 'male', annualsalary: 10500, dateofbirth: '1/6/2001' },
            { code: 'emp105', name: 'jaya', gender: 'female', annualsalary: 9500, dateofbirth: '5/09/2004' },
        ];
    };
    EmployeeDetails.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    return EmployeeDetails;
}());
EmployeeDetails = __decorate([
    core_1.Component({
        selector: 'employee-details',
        templateUrl: './employeedetails.component.html',
        styleUrls: ['./employeedetails.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeDetails);
exports.EmployeeDetails = EmployeeDetails;
//# sourceMappingURL=employeedetails.component.js.map