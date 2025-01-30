"use strict";
describe("Interface", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`hello ${name} my name is ${this.name}`);
        }
    }
    it('should support interface', () => {
        const person = new Person("Ammar");
        person.sayHello("Latif");
    });
});
