describe('Polymorphism', () => {

    class Employee{
        constructor(public name:string) {
        }
    }

    class Manager extends Employee {}

    class VicePrecident extends Manager{}

    const sayHello = (employee: Employee): void => {
        console.info(`Hello ${employee.name}`)
    }

    it('should support', () => {

        let employee:Employee = new Employee("Ammar")
        console.info(employee)

        employee = new Manager("Ammar")
        console.info(employee)

        employee = new VicePrecident("Ammar")
        console.info(employee)
        
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Ammar"))
        sayHello(new Manager("Kur"))
        sayHello(new VicePrecident("Sya"))
    });
});