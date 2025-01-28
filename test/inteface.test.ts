describe("Interface", () =>{
    interface HasName {
        name: string
    }

    interface CanSayHello{
        sayHello(name: string): void
    }

    class Person implements HasName, CanSayHello {
        name: string

        constructor(name: string) {
            this.name = name
        }

        sayHello(name:string):void {
            console.info(`hello ${name} my name is ${this.name}`)
        }

    }
    it('should support interface', () => {
        const person: Person = new Person("Ammar")
        person.sayHello("Latif")
    });
})