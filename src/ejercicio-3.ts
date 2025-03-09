import * as fs from "fs";

/**
 * Interfaz que permite leer un archivo
 */
interface ReadableFile {
  readFile(): string;
}

/**
 * Interfaz que permite escribir en un archivo
 */
interface WriteableFile {
  writeFile(data: string): void;
}

/**
 * Clase ReadFileManager. Manejador de archivos para leer el contenido de un archivo
 */
export class ReadFileManager implements ReadableFile {
  
  /**
   * Constructor de ReadFileManager
   * @param filePath - Ruta del archivo
   */
  constructor(private filePath: string) {}

  /**
   * Lee el contenido del archivo
   * @returns El contenido del archivo
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch {
      console.error("Error al leer el archivo");
      return "";
    }
  }
}

/**
 * Clase WriteFileManager. Manejor de archivos que permite escribir sobre un archivo
 */
export class WriteFileManager implements WriteableFile {

  /**
   * Constructor de WriteFileManager
   * @param filePath - Ruta del archivo
   */
  constructor(private filePath: string) {}

  /**
   * Escribe sobre el archivo
   * @param data - Datos a escribir
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch {
      console.error("Error al escribir en el archivo");
    }
  }
}