describe('Static', () => {

    class Configuration {
        static NAME: string = "Learn OOP Typescript"
        static VERSION: number =  1.0
        static AUTHOR: string = "Ammar Asysyakur"

    }

    class MathUtils {
        static sum(...values: number[]): number {
            let total = 0
            for(let value of values) {
                total += value
            }

            return total
        }
    }

    it('should support', () => {
        console.info(Configuration.NAME)
        console.info(Configuration.VERSION)
        console.info(Configuration.AUTHOR)
    });

    it('should support static method', () => {

        console.info(MathUtils.sum(1,2,3,4,5))
    });

});