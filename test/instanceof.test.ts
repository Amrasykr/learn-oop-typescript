describe('Instance Of', () => {
    class Employee {}
    class Manager {}

    const ammar:Employee = new Employee()
    const dada: Manager = new Manager()
    it('should have problem without instance of or using type of', () => {

        console.info(typeof ammar)
        console.info(typeof dada)
    });

    it('should support instance of', () => {

        expect(ammar instanceof Employee).toBe(true)
        expect(ammar instanceof Manager).toBe(false)

        expect(dada instanceof Employee).toBe(false)
        expect(dada instanceof Manager).toBe(true)
    });
});