"use strict";
describe('Static', () => {
    class Configuration {
    }
    Configuration.NAME = "Learn OOP Typescript";
    Configuration.VERSION = 1.0;
    Configuration.AUTHOR = "Ammar Asysyakur";
    class MathUtils {
        static sum(...values) {
            let total = 0;
            for (let value of values) {
                total += value;
            }
            return total;
        }
    }
    it('should support', () => {
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    });
    it('should support static method', () => {
        console.info(MathUtils.sum(1, 2, 3, 4, 5));
    });
});
