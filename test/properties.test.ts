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
    }

    it('should can have properties', () => {
        const customer:Customer = new Customer("id", "Ammar")
        customer.age = 21
        // customer.address = "poncab"

        console.info(customer)

    });
} )
