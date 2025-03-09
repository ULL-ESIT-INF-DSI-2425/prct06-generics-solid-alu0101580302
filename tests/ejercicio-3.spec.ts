import { describe, test, expect } from "vitest";
import { ReadFileManager, WriteFileManager } from "../src/ejercicio-3"

const readFileManager: ReadFileManager = new ReadFileManager("example.txt");
const writeFileManager: WriteFileManager = new WriteFileManager("example.txt");

describe("Pruebas de ReadFileManager", () => {
    test("", () => {
        expect(readFileManager.readFile()).toStrictEqual("Hola");
    });
});

describe("Pruebas de WriteFileManager", () => {
    test("", () => {
        writeFileManager.writeFile("AAA")
        expect(readFileManager.readFile()).toStrictEqual("AAA");
    });
});