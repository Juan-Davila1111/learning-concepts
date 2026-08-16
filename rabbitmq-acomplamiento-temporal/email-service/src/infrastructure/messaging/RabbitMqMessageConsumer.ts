import { ChannelModel, ConfirmChannel, connect } from "amqplib";

export class RabbitMqMessageConsumer {
  private connecction: ChannelModel;
  private channel: ConfirmChannel;

  constructor() {
    this.channel = null;
    this.connecction = null;
  }

  public async connect(): Promise<void> {
    this.connecction = await connect("amqp://localhost");
    this.channel = await this.connecction.createConfirmChannel();
  }

  public async consume(
    queue: string,
    callback: (message: any) => void,
  ): Promise<void> {
    await this.channel.assertQueue(queue, { durable: true });

    this.channel.consume(queue, (msg) => {
      if (msg !== null) {
        const content = JSON.parse(msg.content.toString());
        callback(content);
        this.channel.ack(msg);
      }
    });
  }
}
