// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('isPhoneNumber', () => {
    // isPhoneNumber should return true
    test('valid number', () => {
        expect(functions.isPhoneNumber('408-709-0021')).toBe(true);
    });

    test('valid number', () => {
        expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
    });

    // isPhoneNumber should return false
    test('invalid number', () => {
        expect(functions.isPhoneNumber('10')).toBe(false);
    });

    test('invalid number', () => {
        expect(functions.isPhoneNumber('111-22-4444')).toBe(false);
    });
})

describe('isEmail', () => {
    // isEmailshould return true
    test('valid email', () => {
        expect(functions.isEmail('laurenklee02@gmail.com')).toBe(true);
    });

    test('valid email', () => {
        expect(functions.isEmail('laurenklee02@yahoo.com')).toBe(true);
    });

    // isEmail should return false
    test('invalid email', () => {
        expect(functions.isEmail('lauren')).toBe(false);
    });

    test('invalid email', () => {
        expect(functions.isEmail('@gmail.com')).toBe(false);
    });
})

describe('isStrongPassword', () => {
    // isStrongPassword should return true
    test('valid password', () => {
        expect(functions.isStrongPassword('abcd')).toBe(true);
    });

    test('valid password', () => {
        expect(functions.isStrongPassword('abcd_1234_a1b2c')).toBe(true);
    });

    // isStrongPassword should return false
    test('invalid password', () => {
        expect(functions.isStrongPassword('abc')).toBe(false);
    });

    test('invalid password', () => {
        expect(functions.isStrongPassword('abcd_1234_a1b2c3')).toBe(false);
    });
})

describe('isDate', () => {
    // isDate should return true
    test('valid date', () => {
        expect(functions.isDate('11/19/2022')).toBe(true);
    });

    test('valid date', () => {
        expect(functions.isDate('1/1/2023')).toBe(true);
    });

    // isDate should return false
    test('invalid date', () => {
        expect(functions.isDate('1/2022')).toBe(false);
    });

    test('invalid date', () => {
        expect(functions.isDate('11/19/22')).toBe(false);
    });
})

describe('isHexColor', () => {
    // isHexColor should return true
    test('valid hex color', () => {
        expect(functions.isHexColor('FFF')).toBe(true);
    });

    test('valid hexcolor', () => {
        expect(functions.isHexColor('EADDCA')).toBe(true);
    });

    // isHexColor should return false
    test('invalid hex color', () => {
        expect(functions.isHexColor('F')).toBe(false);
    });

    test('invalid hex color', () => {
        expect(functions.isHexColor('00')).toBe(false);
    });
})