export enum Genero { POP = "Pop", ROCK = "Rock", METAL = "Metal", CLASSICAL = "Classical",
    OPERA = "Opera", BLUES = "Blues", JAZZ = "Jazz", DISCO = "Disco", TECHNO = "Techno" };

/**
* Clase Cancion. Permite inicializar canciones
*/

export class Cancion {

   /**
    * Constructor de Cancion
    * @param name - Nombre de la canción
    * @param length - Duración de la canción en segundos
    * @param generos - Lista de géneros de la canción
    * @param single - Booleano que indica si la canción es un single o no
    * @param _reproducciones - Número de reproducciones totales de la canción
    */
   constructor(public readonly name: string, public readonly length: number, public readonly generos: Genero[],
           public readonly single: boolean, private _reproducciones: number) {

       if (name.length === 0) {
           throw new Error("El nombre de la canción tiene que tener al menos un caracter");
       } else if (length <= 0) {
           throw new Error("La canción debe durar más de 0 segundos");
       } else if (generos.length === 0) {
           throw new Error("La canción debe de tener al menos un género");
       } else if (_reproducciones < 0) {
           throw new Error("El número de reproducciones ha de ser positivo");
       }
   }

   /**
    * Getter de reproducciones
    */
   get reproducciones() {
       return this._reproducciones;
   }

   /**
    * setter de reproducciones
    */
   set reproducciones(reproducciones: number) {
       this._reproducciones = reproducciones;
   }
}

/**
 * Interfaz SongCollection. Componentes mínimos de una colección de canciones
 */
interface SongCollection {
    name: string;
    year: number;
    canciones: Cancion[];
}

/**
 * Clase Single. Representa un disco que contiene una sola canción o variaciones de la misma
 */
export class Single implements SongCollection {

    /**
     * Constructor de Single
     * @param name - Nombre del single
     * @param year - Año de publicación del single
     * @param canciones - Canciones del single (han de ser distintas versiones de una misma canción)
     */
    constructor(public readonly name: string, public readonly year: number, public readonly canciones: Cancion[]) {
        if (!canciones.every((song) => canciones[0].name === song.name.substring(0, canciones[0].name.length))) {
            throw new Error("Todas las canciones de un single deben de ser versiones de una misma");
        } else if (name.length === 0) {
            throw new Error("El nombre del disco tiene que tener al menos un caracter");
        } else if (year <= 0) {
            throw new Error("El año de publicación debe de ser mayor que 0");
        } else if (canciones.length === 0) {
            throw new Error("El disco debe de tener al menos una canción");
        }
    }
}

/**
 * Clase abstracta Discografia. Representa la forma que ha de tener una discografía.
 */
abstract class Discografia<T extends SongCollection> {

    /**
     * Constructor de Discografia
     * @param discos - Discos de la discografía
     */
    constructor(public discos: T[]) {
        if (discos.length === 0) {
            throw new Error("La discografía debe tener al menos un disco");
        }
    }
}

/**
 * Clase SingleDiscografia. Representa una discografía solo de singles
 */
export class SingleDiscografia extends Discografia<Single> { }

/**
 * Clase DiscoDiscografia. Representa una discografia solo de discos
 */
export class DiscoDiscografia extends Discografia<Disco> { }

/**
 * Clase SongDiscografia. Representa una discografia tanto de singles como de discos
 */
export class SongDiscografia extends Discografia<SongCollection> { }

/**
* Clase Disco. Permite inicializar discos
*/

export class Disco implements SongCollection {

   /**
    * Consturctor de Disco
    * @param name - Nombre del disco
    * @param year - Año de publicación del disco
    * @param _canciones - Lista de canciones en el disco
    */
   constructor(public readonly name: string, public readonly year: number, public readonly canciones: Cancion[]) {
       if (name.length === 0) {
           throw new Error("El nombre del disco tiene que tener al menos un caracter");
       } else if (year <= 0) {
           throw new Error("El año de publicación debe de ser mayor que 0");
       } else if (canciones.length === 0) {
           throw new Error("El disco debe de tener al menos una canción");
       }
   }
}

/**
* Clase Artista. Permite inicializar un artista
*/

export class Artista {

   /**
    * Constructor de Artista
    * @param name - Nombre del artista
    * @param oyentes - Oyentes mensuales del artista
    * @param _discografia - Lista de discos del artista
    */
   constructor(public readonly name: string, public readonly oyentes: number, private _discografia: Discografia<SongCollection>) { 
       if (name.length === 0) {
           throw new Error("El nombre del artista tiene que tener al menos un caracter");
       } else if (oyentes < 0) {
           throw new Error("El número de oyentes ha de ser positivo");
       }
   }

   /**
    * Getter de discografia
    */
   get discografia() {
       return this._discografia;
   }

   /**
    * setter de discografia
    */
   set discografia(discografia: Discografia<SongCollection>) {
       this._discografia = discografia;
   }
}

/**
* Clase BibliotecaMusica. Permite inicializar una biblioteca musical
*/

export class BibliotecaMusica {

   /**
    * Constructor de BibliotecaMusica
    * @param artistas - Lista de artistas
    * @param discos - Lista de discos
    * @param canciones - Lista de canciones
    */
   constructor(public artistas: Artista[], public discos: Disco[], public canciones: Cancion[]) {
       if (artistas.length === 0 || discos.length === 0 || canciones.length === 0) {
           throw new Error("La biblioteca musical no puede inicializarse sin al menos un artista, disco y canción");
       }

       artistas.forEach((art) => {
           art.discografia.discos.forEach((disc) => {
               if (!this.discos.includes(disc)) {
                   this.discos.push(disc);
               }
               disc.canciones.forEach((song) => {
                   if (!this.canciones.includes(song)) {
                       this.canciones.push(song);
                   }
               })
           })
       })
   }

   /**
    * Muestra tablas con la información de los artistas, discos y canciones contenidos en la biblioteca musical
    */
   mostrarTabla(): void {
       console.log("Información de artistas:");
       console.table(this.artistas.map(a => ({
           name: a.name,
           oyentes: a.oyentes,
           discografia: a.discografia.discos.map((d) => d.name)
       })));

       console.log("Información de discos:");
       console.table(this.discos.map(a => ({
           name: a.name,
           year: a.year,
           canciones: a.canciones.map(d => d.name)
       })));

       console.log("Información de canciones:");
       console.table(this.canciones);
   }

   /**
    * Busca los artistas que cumplan un criterio determinado
    * @param pred - Predicado mediente el que buscar a los artistas
    * @returns Lista de artistas que sigan el criterio del predicado
    */
   searchArtista(pred: (art: Artista) => boolean): Artista[] {
       const result: Artista[] = this.artistas.filter(pred);

       console.table(result.map(a => ({
           name: a.name,
           oyentes: a.oyentes,
           discografia: a.discografia.discos.map((d) => d.name)
       })));

       return result;
   }

   /**
    * Busca los discos que cumplan un criterio determinado
    * @param pred - Predicado mediante el que buscar los discos
    * @returns Lista de discos que sigan lso criterios del predicado
    */
   searchDisco(pred: (disc: Disco) => boolean): Disco[] {
       const result: Disco[] = this.discos.filter(pred);

       console.table(result.map(a => ({
           name: a.name,
           year: a.year,
           canciones: a.canciones.map(d => d.name)
       })));

       return result;
   }

   /**
    * Busca las canciones que cumplan un criterio determinado
    * @param pred - Predicado mediente el que buscar las canciones
    * @returns Lista de canciones que sigan los criterios del predicado
    */
   searchCancion(pred: (song: Cancion) => boolean): Cancion[] {
       const result: Cancion[] = this.canciones.filter(pred);

       console.table(result);

       return result;
   }

   /**
    * Calcula el número de canciones de un disco
    * @param disc - Disco al que calcular el numero de canciones
    * @returns El número de canciones de un disco o undefined en caso de que el disco no esté en la biblioteca
    */
   numCancionesDisco(disc: Disco): number | undefined {
       if (this.discos.includes(disc)) {
           return disc.canciones.length;
       } else {
           return undefined;
       }
   }

   /**
    * Calcula la duración en segundos de un disco
    * @param disc - Disco al que calcular su duración
    * @returns La duración del disco en segundos o undefined en caso de que el disco no esté en la biblioteca
    */
   durDisco(disc: Disco): number | undefined {
       if (this.discos.includes(disc)) {
           return disc.canciones.reduce((acc, song) => acc + song.length, 0);
       } else {
           return undefined;
       }
   }

   /**
    * Calcula el número de reproducciones totales de un disco
    * @param disc - Disco al que calcular el número de reproducciones totales
    * @returns El número de reproducciones totales del disco o undefined en caso de que el disco no esté en la biblioteca
    */
   repDisco(disc: Disco): number | undefined {
       if (this.discos.includes(disc)) {
           return disc.canciones.reduce((acc, song) => acc + song.reproducciones, 0);
       } else {
           return undefined;
       }
   }
}