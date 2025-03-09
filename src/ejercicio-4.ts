/**
 * Interfaz que permite imprimir
 */
interface Printable {
  print(): string
}

/**
 * Interfaz que permite escanear
 */
interface Scannable {
  scan(): string
}
  
  /**
   * Clase Printer. Representa una impresora
   */
  export class Printer implements Printable {

    /**
     * Imprime
     */
    print(): string {
      console.log("Printing...");
      return 'Printing...';
    }
  }
  
  /**
   * Clase Scanner. Representa un escáner
   */
  export class Scanner implements Scannable {

    /**
     * Escanea
     */
    scan(): string {
      console.log("Scanning...");
      return 'Scanning...';
    }
  }
  
  /**
   * Clase PrinterScanner. Representa una impresora con escáner
   */
  export class PrinterScanner implements Printable, Scannable {

    /**
     * Imprime
     */
    print(): string {
      console.log("Printing...");
      return 'Printing...';
    }
  
    /**
     * Escanea
     */
    scan(): string {
      console.log("Scanning...");
      return 'Scanning...';
    }
  }
  
  // Client code
  const printer = new Printer();
  // Printing
  printer.print();
  
  const scanner = new Scanner();
  // Scanning
  scanner.scan();
  
  const printerScanner = new PrinterScanner();
  // Printing
  printerScanner.print();
  // Scanning
  printerScanner.scan();