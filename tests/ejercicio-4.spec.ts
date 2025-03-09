import { describe, test, expect } from "vitest";
import { Printer, PrinterScanner, Scanner } from "../src/ejercicio-4"

const printer: Printer = new Printer();
const scanner: Scanner = new Scanner();
const printerScanner: PrinterScanner = new PrinterScanner();

describe("Pruebas", () => {
    test("", () => {
        expect(printer.print()).toStrictEqual("Printing...")
    });

    test("", () => {
        expect(scanner.scan()).toStrictEqual("Scanning...")
    });

    test("", () => {
        expect(printerScanner.print()).toStrictEqual("Printing...")
    });

    test("", () => {
        expect(printerScanner.scan()).toStrictEqual("Scanning...")
    });
});