import { EventBroker } from "../core/event-broker";
import type { AnalyticsService } from "./analytics.service";
import type { EmailService } from "./email.service";

export class UserService {
  private broker = EventBroker.getInstance();

  update(id: number, data: any): void {
    console.log(
      `[UserService] Actualizando datos en DB para el usuario ${id}...`,
    );

    this.broker.notify("USER_UPDATED", { id, data });
  }
}
