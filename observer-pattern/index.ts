import { EmailService } from "./src/services/email.service";
import { AnalyticsService } from "./src/services/analytics.service";
import { EventBroker } from "./src/core/event-broker";
import { UserService } from "./src/services/user.service";

const broker = EventBroker.getInstance();

const emailService = new EmailService();
const analyticsService = new AnalyticsService();

broker.subscribe(emailService)
broker.subscribe(analyticsService)

const userService = new UserService();

userService.update(1, { email: "jhon@example.com", name: "John Doe"})