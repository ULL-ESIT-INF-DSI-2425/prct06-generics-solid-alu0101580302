import { Arithmeticable } from "../src/mod-1.js"

/**
 * Clase RationalNumber. Representa un número racional
 */
export class RationalNumber implements Arithmeticable<RationalNumber> {

    /**
     * Constructor de RationalNumber
     * @param num - Numerador
     * @param den - Denominador
     */
    constructor(private _num: number, private _den: number) {
        if (this._den === 0) {
            throw new Error("El denominador no puede ser 0");
        }
    }

    /**
     * Getter de num
     */
    get num() {
        return this._num;
    }

    /**
     * Getter de den
     */
    get den() {
        return this._den;
    }

    /**
     * Calcula el máximo común divisor
     * @param n1 - Primer divisor
     * @param n2 - Segundo divisor
     * @returns El máxima común divisor entre dos números
     */
    mcd(n1: number, n2: number): number {
        if(n1 == 0) {
            return n2;
        }

        return this.mcd(n2 % n1, n1);  
    }

    /**
     * Calcula el mínimo común múltiplo
     * @param n1 - Primér múltiplo
     * @param n2 - Segundo múltiplo
     * @returns El mínimo común múltiplo entre dos números
     */
    mcm(n1: number, n2: number): number {
        return (n1 * n2) / this.mcd(n1, n2);
    }

    /**
     * Suma el número racional con otro
     * @param num2 - Número racional al que sumar
     * @returns Número racional resultado de la suma
     */
    add(num2: RationalNumber): RationalNumber {
        const denf: number = this.mcm(this.den, num2.den);

        return new RationalNumber((this.num * denf / this.den) + (num2.num * denf / num2.den), denf);
    }

    /**
     * Resta el número racional con otro
     * @param num2 - Número racional al que restar
     * @returns Número racional resultado de la resta
     */
    substract(num2: RationalNumber): RationalNumber {
        const denf: number = this.mcm(this.den, num2.den);

        return new RationalNumber((this.num * denf / this.den) - (num2.num * denf / num2.den), denf);
    }

    /**
     * Multiplica el número racional con otro
     * @param num2 - Número racional al que multiplicar
     * @returns Número racional resultado de la multiplicación
     */
    multiply(num2: RationalNumber): RationalNumber {
        return new RationalNumber(this.num * num2.num, this.den * num2.den);
    }

    /**
     * Divide el número racional con otro
     * @param num2 - Número racional al que dividir
     * @returns Número racional resultado de la división
     */
    divide(num2: RationalNumber): RationalNumber {
        return new RationalNumber(this.num * num2.den, this.den * num2.num);
    }
}