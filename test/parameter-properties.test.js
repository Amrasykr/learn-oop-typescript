"use strict";
describe('Parameter Properties', () => {
    class Person {
        constructor(name = "") {
            this.name = name;
        }
    }
    it('should support', () => {
        const person = new Person("Ammar");
        console.info(person.name);
    });
});
