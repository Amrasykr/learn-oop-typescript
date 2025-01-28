import {DepGraphInfo} from "ts-jest";

describe('Inheritance', () => {

    class Person {
        name: string

        constructor(name: string) {
            this.name = name
        }
    }

    class Employee extends Person {
        department: string

        constructor(name: string, department: string) {
            super(name);
            this.department = department
        }
    }
    it('should support super constructor', () => {

        const employee: Employee = new Employee("Ammar", "Tech")
        console.info(employee)
    });
});