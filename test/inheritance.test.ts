describe("Inheritance", () =>{

    class Employee {
        name: string

        constructor(name: string) {
            this.name = name
        }

    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it('should support inheritance', () => {
        const employee: Employee = new Employee("ammar")
        const manager: Manager = new Manager("syakur")
        const director: Director = new Director("kur")

        console.info(employee)
        console.info(manager)
        console.info(director)
    });
})