describe('Relationship', () => {

    class Person {
        constructor(public name: string) {
        }
    }

    class Manager {
        constructor(public name: string) {
        }
    }

    it('should support', () => {

        const person:Person = new Manager("Ammar")
        console.info(person.name)
    });

});