"use strict";
describe('Polymorphism', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePrecident extends Manager {
    }
    const sayHello = (employee) => {
        if (employee instanceof VicePrecident) {
            const vp = employee;
            console.info(`Hello Vice President ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    };
    it('should support', () => {
        let employee = new Employee("Ammar");
        console.info(employee);
        employee = new Manager("Ammar");
        console.info(employee);
        employee = new VicePrecident("Ammar");
        console.info(employee);
    });
    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Ammar"));
        sayHello(new Manager("Kur"));
        sayHello(new VicePrecident("Sya"));
    });
});
