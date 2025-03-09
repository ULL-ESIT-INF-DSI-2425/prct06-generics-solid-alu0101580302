/**
 * Clase abstracta Bird. Representa un ave
 */
export abstract class Bird { }

/**
 * Clase abstracta FlyingBird. Representa un ave que puede volar
 */
export abstract class FlyingBird extends Bird {
  fly(): string {
    console.log("Flying...");
    return "Flying...";
  }
}

/**
 * Clase abstracta NotFlyingBird. Representa un ave que no puede volar
 */
export abstract class NotFlyingBird extends Bird { }
  
/**
 * Clase Sparrow. Representa un gorrión
 */
export class Sparrow extends FlyingBird { }
  
/**
 * Clase Penguin. Representa un pingüino
 */
export class Penguin extends NotFlyingBird { }