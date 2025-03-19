import { describe, test, expect } from "vitest";
import { ComplexNumber } from "../src/mod-1";
import { RationalNumber } from "../src/mod-2";
import { Adapter } from "../src/mod-3";

const num1: ComplexNumber = new ComplexNumber(1, 2);
const num2: ComplexNumber = new ComplexNumber(3, -5);
const num3: Adapter = new Adapter(new RationalNumber(-2, 4));
const num4: Adapter = new Adapter(new RationalNumber(7, 1));

describe("Pruebas de Adapter", () => {
    describe("Pruebas de add", () => {
        test("(1+2i) + (-2/4)", () => {
            expect(num1.add(num3)).toStrictEqual(new ComplexNumber(0.5, 2));
        });

        test("(1+2i) + (7/1)", () => {
            expect(num1.add(num4)).toStrictEqual(new ComplexNumber(8, 2));
        });

        test("(3-5i) + (-2/4)", () => {
            expect(num2.add(num3)).toStrictEqual(new ComplexNumber(2.5, -5));
        });
    
        test("(3-5i) + (7/1)", () => {
            expect(num2.add(num4)).toStrictEqual(new ComplexNumber(10, -5));
        });
    });

    describe("Pruebas de substract", () => {
        test("(1+2i) - (-2/4)", () => {
            expect(num1.substract(num3)).toStrictEqual(new ComplexNumber(1.5, 2));
        });

        test("(1+2i) - (7/1)", () => {
            expect(num1.substract(num4)).toStrictEqual(new ComplexNumber(-6, 2));
        });

        test("(3-5i) - (-2/4)", () => {
            expect(num2.substract(num3)).toStrictEqual(new ComplexNumber(3.5, -5));
        });
    
        test("(3-5i) - (7/1)", () => {
            expect(num2.substract(num4)).toStrictEqual(new ComplexNumber(-4, -5));
        });
    });

    describe("Pruebas de multiply", () => {
        test("(1+2i) * (-2/4)", () => {
            expect(num1.multiply(num3)).toStrictEqual(new ComplexNumber(-0.5, -1));
        });

        test("(1+2i) * (7/1)", () => {
            expect(num1.multiply(num4)).toStrictEqual(new ComplexNumber(7, 14));
        });

        test("(3-5i) * (-2/4)", () => {
            expect(num2.multiply(num3)).toStrictEqual(new ComplexNumber(-1.5, 2.5));
        });
    
        test("(3-5i) * (7/1)", () => {
            expect(num2.multiply(num4)).toStrictEqual(new ComplexNumber(21, -35));
        });
    });

    describe("Pruebas de divide", () => {
        test("(1+2i) / (-2/4)", () => {
            expect(num1.divide(num3)).toStrictEqual(new ComplexNumber(-2, -4));
        });

        test("(1+2i) / (7/1)", () => {
            expect(num1.divide(num4)).toStrictEqual(new ComplexNumber(1/7, 2/7));
        });

        test("(3-5i) / (-2/4)", () => {
            expect(num2.divide(num3)).toStrictEqual(new ComplexNumber(-6, 10));
        });
    
        test("(3-5i) / (7/1)", () => {
            expect(num2.divide(num4)).toStrictEqual(new ComplexNumber(3/7, -5/7));
        });
    });
});