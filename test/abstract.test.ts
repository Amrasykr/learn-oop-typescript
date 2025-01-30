describe('Abstract Class', () => {
    abstract class Customer {
        readonly id: number
        abstract name: string

        constructor(id: number) {
            this.id = id
        }

        hello(){
            console.info("Hello")
        }

        abstract sayHello(name: string): void
    }


    class RegulerCustomer extends Customer {
        name: string;

        constructor(id: number, name: string) {
            super(id);
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`hello ${name}, my name is ${this.name}`)
        }

    }

    it('should support', () => {

        const regulerCustomer: RegulerCustomer = new RegulerCustomer(1, "Ammar")
        regulerCustomer.sayHello("Latif")
    });
});