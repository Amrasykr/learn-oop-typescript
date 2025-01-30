describe('Parameter Properties', () => {

    class Person {
        constructor(public name: String = "") {
        }
    }
    it('should support', () => {

        const person: Person = new Person("Ammar")
        console.info(person.name)

    });
});