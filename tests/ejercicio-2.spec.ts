import { describe, test, expect } from "vitest";
import { Cancion, Disco, Artista, BibliotecaMusica, Genero } from "../src/ejercicio-2";

const song1: Cancion = new Cancion("Shake It Off", 242, [Genero.POP], true, 3000000000);
const song2: Cancion = new Cancion("Cruel Summer", 180, [Genero.POP], true, 228000000);
const song3: Cancion = new Cancion("Haruhikage", 259, [Genero.ROCK], false, 216000);
const song4: Cancion = new Cancion("Shoujo Rei", 289, [Genero.POP], false, 614000);
const disc1: Disco = new Disco("Disco 1", 2020, [song1, song2]);
const disc2: Disco = new Disco("Disco 2", 2023, [song3, song4]);
const art1: Artista = new Artista("Taylor Swift", 88200000, [disc1]);
const art2: Artista = new Artista("MyGO!!!!!", 200000, [disc2]);
const biblioteca: BibliotecaMusica = new BibliotecaMusica([art1, art2], [disc1, disc2], [song1, song2, song3, song4]);

describe("Pruebas de Artista", () => {
    test("", () => {
        expect(() => new Artista("", 88200000, [disc1])).toThrowError("El nombre del artista tiene que tener al menos un caracter");
    });

    test("", () => {
        expect(() => new Artista("a", -88200000, [disc1])).toThrowError("El número de oyentes ha de ser positivo");
    });

    test("", () => {
        expect(() => new Artista("a", 88200000, [])).toThrowError("El artista debe de tener al menos un disco");
    });
});

describe("Pruebas de Disco", () => {
    test("", () => {
        expect(() => new Disco("", 2020, [song1, song2])).toThrowError("El nombre del disco tiene que tener al menos un caracter");
    });

    test("", () => {
        expect(() => new Disco("Disco 1", -2020, [song1, song2])).toThrowError("El año de publicación debe de ser mayor que 0");
    });

    test("", () => {
        expect(() => new Disco("Disco 1", 2020, [])).toThrowError("El disco debe de tener al menos una canción");
    });
});

describe("Pruebas de Cancion", () => {
    test("", () => {
        expect(() => new Cancion("", 242, [Genero.ROCK], false, 216000)).toThrowError("El nombre de la canción tiene que tener al menos un caracter");
    });

    test("", () => {
        expect(() => new Cancion("Haruhikage", -242, [Genero.ROCK], false, 216000)).toThrowError("La canción debe durar más de 0 segundos");
    });

    test("", () => {
        expect(() => new Cancion("Haruhikage", 242, [], false, 216000)).toThrowError("La canción debe de tener al menos un género");
    });

    test("", () => {
        expect(() => new Cancion("Haruhikage", 242, [Genero.ROCK], false, -216000)).toThrowError("El número de reproducciones ha de ser positivo");
    });
});

describe("Pruebas de BibliotecaMusical", () => {
    test("", () => {
        expect(() => new BibliotecaMusica([], [], [])).toThrowError("La biblioteca musical no puede inicializarse sin al menos un artista, disco y canción");
    });

    test("", () => {
        expect(biblioteca.searchArtista((art: Artista) => art.oyentes > 1000000)).toStrictEqual([art1]);
    });

    test("", () => {
        expect(biblioteca.searchDisco((disc: Disco) => disc.year > 2020)).toStrictEqual([disc2]);
    });

    test("", () => {
        expect(biblioteca.searchCancion((song: Cancion) => song.length > 250)).toStrictEqual([song3, song4]);
    });

    test("", () => {
        expect(biblioteca.numCancionesDisco(disc2)).toStrictEqual(2);
    });

    test("", () => {
        expect(biblioteca.numCancionesDisco(new Disco("a", 2018, [song1]))).toStrictEqual(undefined);
    });

    test("", () => {
        expect(biblioteca.durDisco(disc2)).toStrictEqual(548);
    });

    test("", () => {
        expect(biblioteca.durDisco(new Disco("a", 2018, [song1]))).toStrictEqual(undefined);
    });

    test("", () => {
        expect(biblioteca.repDisco(disc2)).toStrictEqual(830000);
    });

    test("", () => {
        expect(biblioteca.repDisco(new Disco("a", 2018, [song1]))).toStrictEqual(undefined);
    });
});