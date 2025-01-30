"use strict";
describe('Relationship', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support', () => {
        const person = new Manager("Ammar");
        console.info(person.name);
    });
});
