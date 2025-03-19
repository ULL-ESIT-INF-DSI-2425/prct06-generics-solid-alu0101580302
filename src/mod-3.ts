import { ComplexNumber } from "../src/mod-1.js";
import { RationalNumber } from "../src/mod-2.js";

/**
 * Clase Adapter. Adapta un número racional en un formato que puede entender un número complejo
 */
export class Adapter extends ComplexNumber {

    /**
     * Constructor de Adapter
     * @param _rational - Número racional que adaptar al complejo
     */
    constructor(private _rational: RationalNumber) {
        super(_rational.num / _rational.den, 0);
    }
}