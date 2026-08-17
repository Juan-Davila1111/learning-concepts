import type { Observer } from "../core/interfaces/observer.interface";

export class EmailService<T> implements Observer<T> {

    update(event: string, data: T): void {
        console.log(`[EmailService] Evento recibido:  ${event}`,  data)
    }

    sendUpdateNotification(email: string): void {
        console.log(`[Email] Notificanto cambio a: ${email}`)
    }
}