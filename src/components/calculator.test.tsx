import { difference, division, interpretateExpression, multiply, sum } from './Calculator';

describe('Math operations', () => {
    it('Sum operation', () => {
        expect(sum(2,3)).toBe(5);
    });

    it('Sum of float numbers', () => {
        expect(sum(2.0000000000000000000000001,1.9999999999999999999999999,)).toBe(4);
    });

    it('Difference operation', () => {
        expect(difference(2,3)).toBe(-1);
    });

    it('Division operation', () => {
        expect(division(6,3)).toBe(2);
    });

    it('Division operation fractions', () => {
        expect(division(3,6)).toBe(0.5);
    });

    it('Division zero', () => {
        expect(division(3,0)).toBe(Infinity);
    });

    it('Multiply operation', () => {
        expect(multiply(2,3)).toBe(6);
    });
});

describe('Work with regex', () => {
    it('Simple expression', ( )=> {
        const result = interpretateExpression('5-2');

        expect(result).toEqual(['5','-','2']);
    });

    it('A lot of spaces', ( )=> {
        const result = interpretateExpression('5-2 -                           3');

        expect(result).toEqual(['5','-','2','-','3']);
    });

    it('Expression with ()', ( )=> {
        const result = interpretateExpression('5-(-2)');

        expect(result).toEqual(['5','-','-','2']);
    });
});
