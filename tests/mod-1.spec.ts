import { describe, test, expect } from "vitest";
import { ComplexNumber, ArithmeticableCollection } from "../src/mod-1"

const num1: ComplexNumber = new ComplexNumber(1, 2);
const num2: ComplexNumber = new ComplexNumber(3, -5);
const num3: ComplexNumber = new ComplexNumber(-2, 4);
const num4: ComplexNumber = new ComplexNumber(7, 1);

describe("Pruebas de ComplexNumber", () => {
    describe("Pruebas de add", () => {
        test("(1+2i) + (3-5i)", () => {
            expect(num1.add(num2)).toStrictEqual(new ComplexNumber(4, -3));
        });
    
        test("(-2+4i) + (7+i)", () => {
            expect(num3.add(num4)).toStrictEqual(new ComplexNumber(5, 5));
        });

        test("(1+2i) + (-2+4i)", () => {
            expect(num1.add(num3)).toStrictEqual(new ComplexNumber(-1, 6));
        });

        test("(1+2i) + (7+i)", () => {
            expect(num1.add(num4)).toStrictEqual(new ComplexNumber(8, 3));
        });
    });

    describe("Pruebas de substract", () => {
        test("(1+2i) - (3-5i)", () => {
            expect(num1.substract(num2)).toStrictEqual(new ComplexNumber(-2, 7));
        });
    
        test("(3-5i) - (-2+4i)", () => {
            expect(num2.substract(num3)).toStrictEqual(new ComplexNumber(5, -9));
        });

        test("(1+2i) - (-2+4i)", () => {
            expect(num1.substract(num3)).toStrictEqual(new ComplexNumber(3, -2));
        });

        test("(1+2i) - (7+i)", () => {
            expect(num1.substract(num4)).toStrictEqual(new ComplexNumber(-6, 1));
        });
    });

    describe("Pruebas de multiply", () => {
        test("(1+2i) * (3-5i)", () => {
            expect(num1.multiply(num2)).toStrictEqual(new ComplexNumber(13, 1));
        });
    
        test("(1+2i) * (7+i)", () => {
            expect(num1.multiply(num4)).toStrictEqual(new ComplexNumber(5, 15));
        });

        test("(1+2i) * (-2+4i)", () => {
            expect(num1.multiply(num3)).toStrictEqual(new ComplexNumber(-10, 0));
        });

        test("(3-5i) * (-2+4i)", () => {
            expect(num2.multiply(num3)).toStrictEqual(new ComplexNumber(14, 22));
        });
    });

    describe("Pruebas de divide", () => {
        test("(1+2i) / (3-5i)", () => {
            expect(num1.divide(num2)).toStrictEqual(new ComplexNumber(-7/34, 11/34));
        });
    
        test("(3-5i) / (7+i)", () => {
            expect(num2.divide(num4)).toStrictEqual(new ComplexNumber(8/25, -19/25));
        });

        test("(1+2i) / (-2+4i)", () => {
            expect(num1.divide(num3)).toStrictEqual(new ComplexNumber(3/10, -2/5));
        });

        test("(1+2i) / (7+i)", () => {
            expect(num1.divide(num4)).toStrictEqual(new ComplexNumber(9/50, 13/50));
        });
    });
});

const collection1: ArithmeticableCollection<ComplexNumber> = new ArithmeticableCollection<ComplexNumber>([num1, num2, num3, num4]);
const collection2: ArithmeticableCollection<ComplexNumber> = new ArithmeticableCollection<ComplexNumber>([num1, num3, num4]);

describe("Pruebas de ArithmeticableCollection", () => {
    describe("Pruebas de getArithmeticable", () => {
        test("", () => {
            expect(collection1.getArithmeticable(1)).toStrictEqual(num2);
        });
    
        test("", () => {
            expect(collection1.getArithmeticable(2)).toStrictEqual(num3);
        });

        test("", () => {
            expect(collection2.getArithmeticable(0)).toStrictEqual(num1);
        });

        test("", () => {
            expect(collection2.getArithmeticable(2)).toStrictEqual(num4);
        });
    
        test("", () => {
            expect(() => collection1.getArithmeticable(-1)).toThrowError("El índice se sale del array");
        });

        test("", () => {
            expect(() => collection1.getArithmeticable(11)).toThrowError("El índice se sale del array");
        });
    });

    describe("Pruebas de addArithmeticable y getNumberOfAirhmeticables", () => {
        test("", () => {
            expect(collection2.getNumberOfArithmeticables()).toStrictEqual(3);
        });
        
        test("", () => {
            expect(collection1.getNumberOfArithmeticables()).toStrictEqual(4);
        });
        
        test("", () => {
            collection1.addArithmeticable(new ComplexNumber(1, 1));
            expect(collection1.getNumberOfArithmeticables()).toStrictEqual(5);
        });
    
        test("", () => {
            const num5: ComplexNumber = new ComplexNumber(5, 7);
            collection1.addArithmeticable(num5);
            expect(collection1.getArithmeticable(5)).toStrictEqual(num5);
        });

        test("", () => {
            expect(collection1.getNumberOfArithmeticables()).toStrictEqual(6);
        });

        test("", () => {
            const num6: ComplexNumber = new ComplexNumber(5, 7);
            collection2.addArithmeticable(num6);
            expect(collection2.getArithmeticable(3)).toStrictEqual(num6);
        });

        test("", () => {
            collection2.addArithmeticable(new ComplexNumber(5, 7));
            expect(collection2.getNumberOfArithmeticables()).toStrictEqual(5);
        });
    });
});
