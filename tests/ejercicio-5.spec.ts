import { describe, test, expect } from "vitest";
import { EmailService, ShortMessageService, Notifier } from "../src/ejercicio-5"

const notifier1: Notifier<EmailService> = new Notifier(new EmailService());
const notifier2: Notifier<ShortMessageService> = new Notifier(new ShortMessageService());

describe("Pruebas de Notifier", () => {
    test("", () => {
        expect(notifier1.sendNotification("Notificación email")).toStrictEqual("Sending notification by email: Notificación email")
    });

    test("", () => {
        expect(notifier2.sendNotification("Notificación SMS")).toStrictEqual("Sending notification by SMS: Notificación SMS")
    });
});