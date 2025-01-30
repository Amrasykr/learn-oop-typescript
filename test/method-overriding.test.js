"use strict";
describe('Method Overriding', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHello(name) {
            // console.info(`Hello ${name}, my name is ${this.name}, iam your manager`)
            super.sayHello(name);
            console.info("and iam your manager");
        }
    }
    it('should support', () => {
        const employee = new Employee("Latif");
        const manager = new Manager("Ammar");
        manager.sayHello(employee.name);
    });
});
