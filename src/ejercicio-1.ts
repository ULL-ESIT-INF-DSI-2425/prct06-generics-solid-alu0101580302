/**
 * Interfaz Streamable. Define la forma de las clases que guardan contenidos audiovisuales para el streaming.
 */
interface Streamable<T extends AudioVisual> {
    collection: T[];
    searchTitle(t: string): T[];
    searchYear(y: number): T[];
}

/**
 * Clase abstracta AudioVisual. Define los campos mínimos que ha de tener un contenido audiovisual
 */
abstract class AudioVisual {

    /**
     * Constructor de AudioVisual
     * @param _title - Título del contenido audiovisual
     * @param _year - Año de estreno del contenido audiovisual
     */
    constructor(private _title: string, private _year: number) {
    }

    /**
     * Getter de title
     */
    get title() {
        return this._title;
    }

    /**
     * Getter de year
     */
    get year() {
        return this._year;
    }
}

/**
 * Clase Series, subclase de AudioVisual. Representa series de TV
 */
export class Series extends AudioVisual {

    /**
     * Constructor de Series
     * @param title - Título de la serie
     * @param year - Año de estreno de la serie
     * @param _numEpisodes - Número de episodios de la serie
     */
    constructor(title: string, year: number, private _numEpisodes: number) {
        super(title, year);
    }

    /**
     * Getter de numEpisodes
     */
    get numEpisodes() {
        return this._numEpisodes;
    }
}

/**
 * Clase Movie, subclase de AudioVisual. Representa una película
 */
export class Movie extends AudioVisual {

    /**
     * COnstructor de Movie
     * @param title - Título de la película
     * @param year - Año de estreno de la película
     * @param _length - Duración de la película
     */
    constructor(title: string, year: number, private _length: number) {
        super(title, year);
    }

    /**
     * Getter de length
     */
    get length() {
        return this._length;
    }
}

/**
 * Clase Documentary, subclase de AudioVisual. Representa un documental
 */
export class Documentary extends AudioVisual {

    /**
     * Constructor de Documentary
     * @param title - Título del documental
     * @param year - Año de estreno del documental
     * @param _theme - Temática del documental
     */
    constructor(title: string, year: number, private _theme: string) {
        super(title, year);
    }

    /**
     * Getter de theme
     */
    get theme() {
        return this._theme;
    }
}

/**
 * Clase abstracta BasicStreamableCollection, implementa Streamable. Determina los elementos mínimos que tiene que tener una colección de contenido audiovisual (AudioVisual)
 */
abstract class BasicStreamableCollection<T extends AudioVisual> implements Streamable<T> {
    
    /**
     * Constructor de BasicStreamableCollection
     * @param collection - Lista de un tipo de contenido audiovisual
     */
    constructor(public readonly collection: T[]) {
    }

    /**
     * Filtra todo el contenido audiovisual por el que tenga un título concreto
     * @param title - Título a buscar
     * @returns Lista de contenido audiovisual que tenga de título "title"
     */
    public searchTitle(title: string): T[] {
        return this.collection.filter((elem) => elem.title === title);
    }

    /**
     * Filtra todo el contenido audiovisual por el que se haya estrenado un año concreto
     * @param year - Año de estreno a buscar
     * @returns Lista de contenido audiovisual que se haya estrenado en el año year
     */
    public searchYear(year: number): T[] {
        return this.collection.filter((elem) => elem.year === year);
    }
}

/**
 * Clase SeriesStreamableCollection, hija de BasicStreamableCollection de tipo Series. Representa una colección de Series en streaming
 */
export class SeriesStreamableCollection extends BasicStreamableCollection<Series> {

    /**
     * Filtra todas las series por un número de capítulos concreto
     * @param num - Número de capítulos a buscar
     * @returns Lista de series con número de capítulos num
     */
    public searchNumEpisodes(num: number): Series[] {
        return this.collection.filter((elem) => elem.numEpisodes === num);
    }
}

/**
 * Clase MovieStreamableCollection, hija de BasicStreamableCollection de tipo Movie. Representa una colección de Movie en streaming
 */
export class MovieStreamableCollection extends BasicStreamableCollection<Movie> {

    /**
     * Filtra las películas por una duración concreta
     * @param length - Duración a buscar
     * @returns Lista de películas de duración length
     */
    public searchLength(length: number): Movie[] {
        return this.collection.filter((elem) => elem.length === length);
    }
}

/**
 * Clase DocumentaryStreamableCollection, hija de BasicStreamableCollection de tipo Documentary. Representa una colección de Documentary en streaming
 */
export class DocumentaryStreamableCollection extends BasicStreamableCollection<Documentary> {

    /**
     * Filtra todos los documentales por una temática concreta
     * @param theme - Temática a buscar
     * @returns Lista de documentales de temática "theme"
     */
    public searchTheme(theme: string): Documentary[] {
        return this.collection.filter((elem) => elem.theme === theme);
    }
}