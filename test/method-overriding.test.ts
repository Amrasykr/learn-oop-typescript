describe('Method Overriding', () => {

    class Employee {

        name: string

        constructor(name: string) {
            this.name = name
        }

        sayHello(name: string) : void {
            console.info(`Hello ${name}, my name is ${this.name}`)
        }

    }

    class Manager extends Employee{

        sayHello(name: string) {
            // console.info(`Hello ${name}, my name is ${this.name}, iam your manager`)
            super.sayHello(name)
            console.info("and iam your manager")
        }
    }

    it('should support', () => {

        const employee: Employee = new Employee("Latif")
        const manager: Manager = new Manager("Ammar")
        manager.sayHello(employee.name)
    });
});