import {MathUtils} from "../src/math-utils";

describe('Namespace', () => {

    it('should support namespace', () => {

        console.info(MathUtils.PHI)
        console.info(MathUtils.sum(1,23,4))
    });
});