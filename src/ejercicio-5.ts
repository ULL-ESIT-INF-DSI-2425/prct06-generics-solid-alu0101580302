
/**
 * CLase abstracta MessageService. Da forma a los servicios de mensajería
 */
abstract class MessageService {

  /**
   * Notifica un mensaje
   * @param message - Mensaje a notificar
   */
  abstract notify(message: string): string;
}

// Class that allows notifications by email to be sent
export class EmailService extends MessageService {

    /**
     * Notifica de un email
     * @param message - Email a notificar
     */
    notify(message: string): string {
      console.log(`Sending notification by email: ${message}`);
      return `Sending notification by email: ${message}`;
    }
  }
  
  // Class that allows notifications by SMS to be sent
  export class ShortMessageService extends MessageService {

    /**
     * Notifica un SMS
     * @param message - SMS a notificar
     */
    notify(message: string): string {
      console.log(`Sending notification by SMS: ${message}`);
      return `Sending notification by SMS: ${message}`;
    }
  }
  
  // Class that makes use of different types of services to perform notifications
  export class Notifier<T extends MessageService> {
    /**
     * Constructor de Notifier
     * @param notificationService - Servicio de mensajería que utilizar
     */
    constructor(private notificationService: T) {
    }
  
    /**
     * Envía una notificación
     * @param message - Notificación a enviar
     */
    sendNotification(message: string): string {
      return this.notificationService.notify(message);
    }
  }
  
  // Client code
  const emailNotifier = new Notifier(new EmailService());
  emailNotifier.sendNotification('Hello World!');
  
  const shortMessageNotifier = new Notifier(new ShortMessageService());
  shortMessageNotifier.sendNotification('Hello World!');