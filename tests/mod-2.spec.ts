import { describe, test, expect } from "vitest";
import { RationalNumber } from "../src/mod-2.js"

const num1: RationalNumber = new RationalNumber(1, 2);
const num2: RationalNumber = new RationalNumber(3, 5);
const num3: RationalNumber = new RationalNumber(2, 4);
const num4: RationalNumber = new RationalNumber(7, 1);

describe("Pruebas de ComplexNumber", () => {
    describe("Pruebas de add", () => {
        test("(1/2) + (3/5)", () => {
            expect(num1.add(num2)).toStrictEqual(new RationalNumber(11, 10));
        });
    
        test("(2/4) + (7/1)", () => {
            expect(num3.add(num4)).toStrictEqual(new RationalNumber(30, 4));
        });
    });

    describe("Pruebas de substract", () => {
        test("(1/2) - (3/5)", () => {
            expect(num1.substract(num2)).toStrictEqual(new RationalNumber(-1, 10));
        });
    
        test("(3/5) - (2/4)", () => {
            expect(num2.substract(num3)).toStrictEqual(new RationalNumber(2, 20));
        });
    });

    describe("Pruebas de multiply", () => {
        test("(1/2) * (3/5)", () => {
            expect(num1.multiply(num2)).toStrictEqual(new RationalNumber(3, 10));
        });
    
        test("(1/2) * (7/1)", () => {
            expect(num1.multiply(num4)).toStrictEqual(new RationalNumber(7, 2));
        });
    });

    describe("Pruebas de divide", () => {
        test("(1/2) / (3/5)", () => {
            expect(num1.divide(num2)).toStrictEqual(new RationalNumber(5, 6));
        });
    
        test("(3/5) / (7/1)", () => {
            expect(num2.divide(num4)).toStrictEqual(new RationalNumber(3, 35));
        });
    });
});