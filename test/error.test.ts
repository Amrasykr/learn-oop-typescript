describe('Error Handling', () => {
    class ValidationError extends Error {
        constructor(public message: string) {
            super(message);
        }
    }

    const DoubleIt = (value: number): number => {
        if (value < 0) {
            throw new ValidationError("Value Cannot Be Less then 0")
        }

        return value * 2
    }


    it('should support try catch', () => {

        try {
            const result = DoubleIt(1)
            console.info(result)
        } catch (e){
            if (e instanceof ValidationError){
                console.info(e.message)
            }
        }
        
    });
});