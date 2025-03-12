
/**
 * Interfaz genérica Arithmeticable. Define la forma que ha de tener una clase que sea aritmética
 */
interface Arithmeticable<T> {
    add(arith: T): T;
    substract(arith: T): T;
    multiply(arith: T): T;
    divide(arith: T): T;
}

/**
 * Clase ComplexNumber. Representa un número complejo
 */
export class ComplexNumber implements Arithmeticable<ComplexNumber> {
    
    /**
     * Constructor de ComplexNumber
     * @param real - Parte real del número complejo
     * @param imaginary - Parte imaginaria del número complejo
     */
    constructor(private readonly real: number, private readonly imaginary: number) {

    }

    /**
     * Suma el número complejo con otro
     * @param complex2 - Número complejo con el que sumar
     * @returns Número complejo resultado de la suma
     */
    add(complex2: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this.real + complex2.real, this.imaginary + complex2.imaginary);
    }

    /**
     * Resta el número complejo con otro
     * @param complex2 - Número complejo con el que restar
     * @returns Número complejo resultado de la resta
     */
    substract(complex2: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this.real - complex2.real, this.imaginary - complex2.imaginary);
    }

    /**
     * Multiplica el número complejo con otro
     * @param complex2 - Número complejo con el que multiplicar
     * @returns Número complejo resultado de la multiplicación
     */
    multiply(complex2: ComplexNumber): ComplexNumber {
        return new ComplexNumber((this.real * complex2.real) + (-1 * this.imaginary * complex2.imaginary), (this.real * complex2.imaginary) + (this.imaginary * complex2.real));
    }

    /**
     * Divide el número complejo con otro
     * @param complex2 - Número complejo con el que dividir
     * @returns Número complejo resultado de la división
     */
    divide(complex2: ComplexNumber): ComplexNumber {
        const denominador: number = complex2.real**2 + complex2.imaginary**2;
        return new ComplexNumber(((this.real * complex2.real) + (this.imaginary * complex2.imaginary)) / denominador, ((this.imaginary * complex2.real) - (this.real * complex2.imaginary))/ denominador);
    }
}

/**
 * Clase ArithmeticableCollection. Representa una colección de elementos aritméticos
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    
    /**
     * Constructor de ArithmeticableCollection
     * @param arithmetics - Lista de aritméticos
     */
    constructor(private arithmetics: T[]) {

    }

    /**
     * Añade un airtmético a la lista
     * @param arithmetic - Elemento aritmético que añadir a la lista
     */
    addArithmeticable(arithmetic: T): void {
        this.arithmetics.push(arithmetic);
    }

    /**
     * Decuelve el elemento de la lista en index
     * @param index - Indice de la lista a buscar
     * @returns Elemento en esa posición
     */
    getArithmeticable(index: number): T {
        if (index < 0 || index >= this.arithmetics.length) {
            throw new Error("El índice se sale del array");
        }

        return this.arithmetics[index];
    }

    /**
     * Devuelve el numero de aritmeticos de la lista
     * @returns El numero de aritmeticos en la lista
     */
    getNumberOfArithmeticables(): number {
        return this.arithmetics.length;
    }
}