"use strict";
describe("properties", () => {
    class Customer {
        constructor(id, name) {
            this.address = "none"; // default value
            this.id = id;
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should can have properties', () => {
        const customer = new Customer("id", "Ammar");
        customer.age = 21;
        // customer.address = "poncab"
        console.info(customer);
    });
    it('should can have method', () => {
        const customer = new Customer("id", "Ammar");
        customer.age = 21;
        customer.sayHello("Latif");
    });
});
