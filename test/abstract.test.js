"use strict";
describe('Abstract Class', () => {
    class Customer {
        constructor(id) {
            this.id = id;
        }
        hello() {
            console.info("Hello");
        }
    }
    class RegulerCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.info(`hello ${name}, my name is ${this.name}`);
        }
    }
    it('should support', () => {
        const regulerCustomer = new RegulerCustomer(1, "Ammar");
        regulerCustomer.sayHello("Latif");
    });
});
