import { describe, test, expect } from "vitest";
import { Series, Movie, Documentary, SeriesStreamableCollection, MovieStreamableCollection, DocumentaryStreamableCollection } from "../src/ejercicio-1"

describe("Pruebas de SeriesStreamableCollection", () => {
    const series1 = new Series("AAA", 2020, 12);
    const series2 = new Series("AA", 2021, 25);
    const series3 = new Series("A", 2021, 48);
    const stream = new SeriesStreamableCollection([series1, series2, series3]);

    test("", () => {
        expect(stream.searchTitle("AA")).toStrictEqual([series2]);
    });

    test("", () => {
        expect(stream.searchYear(2021)).toStrictEqual([series2, series3]);
    });

    test("", () => {
        expect(stream.searchNumEpisodes(12)).toStrictEqual([series1]);
    });
});

describe("Pruebas de MovieStreamableCollection", () => {
    const movie1 = new Movie("AAA", 2020, 120);
    const movie2 = new Movie("AA", 2021, 183);
    const movie3 = new Movie("AA", 2024, 96);
    const stream = new MovieStreamableCollection([movie1, movie2, movie3]);

    test("", () => {
        expect(stream.searchTitle("AA")).toStrictEqual([movie2, movie3]);
    });

    test("", () => {
        expect(stream.searchYear(2021)).toStrictEqual([movie2]);
    });

    test("", () => {
        expect(stream.searchLength(120)).toStrictEqual([movie1]);
    });
});

describe("Pruebas de DocumentaryStreamableCollection", () => {
    const documentary1 = new Documentary("AAA", 2020, "Animales");
    const documentary2 = new Documentary("AA", 2021, "Animales");
    const documentary3 = new Documentary("A", 2024, "Espacio");
    const stream = new DocumentaryStreamableCollection([documentary1, documentary2, documentary3]);

    test("", () => {
        expect(stream.searchTitle("AA")).toStrictEqual([documentary2]);
    });

    test("", () => {
        expect(stream.searchYear(2024)).toStrictEqual([documentary3]);
    });

    test("", () => {
        expect(stream.searchTheme("Animales")).toStrictEqual([documentary1, documentary2]);
    });
});