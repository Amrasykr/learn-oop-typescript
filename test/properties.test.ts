describe("properties", () => {
    class Customer {
        readonly id: String
        name: String
        age?: Number
        address: String = "none" // default value

        constructor(id: String, name: String) {
            this.id = id
            this.name = name
        }

        sayHello(name: String): void {
            console.info(`Hello ${name}, my name is ${this.name}`) 
        }
    }

    it('should can have properties', () => {
        const customer:Customer = new Customer("id", "Ammar")
        customer.age = 21
        // customer.address = "poncab"

        console.info(customer)

    });

    it('should can have method', () => {
        const customer:Customer = new Customer("id", "Ammar")
        customer.age = 21

        customer.sayHello("Latif")
    });
} )
