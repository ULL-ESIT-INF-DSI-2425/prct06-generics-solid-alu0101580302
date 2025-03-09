import { describe, test, expect } from "vitest";
import { Sparrow } from "../src/ejercicio-6"

const sparrow: Sparrow = new Sparrow();

describe("Pruebas de Bird", () => {
    test("", () => {
        expect(sparrow.fly()).toStrictEqual("Flying...");
    });
});