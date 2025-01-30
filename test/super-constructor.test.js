"use strict";
describe('Inheritance', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it('should support super constructor', () => {
        const employee = new Employee("Ammar", "Tech");
        console.info(employee);
    });
});
