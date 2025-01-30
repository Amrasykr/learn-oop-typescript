"use strict";
describe("Inheritance", () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it('should support inheritance', () => {
        const employee = new Employee("ammar");
        const manager = new Manager("syakur");
        const director = new Director("kur");
        console.info(employee);
        console.info(manager);
        console.info(director);
    });
});
