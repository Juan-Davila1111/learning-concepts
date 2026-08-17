import type { Observer } from "./interfaces/observer.interface";
import type { Subject } from "./interfaces/subject.interface";

export class EventBroker<T> implements Subject<T> {
  private static instance: EventBroker<any>;
  private observers = new Set<Observer<T>>();

  private constructor() {}

  public static getInstance<T>(): EventBroker<T> {
    if (!EventBroker.instance) {
      EventBroker.instance = new EventBroker<T>();
    }

    return EventBroker.instance as EventBroker<T>;
  }

  subscribe(observer: Observer<T>): void {
    this.observers.add(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers.delete(observer);
  }

  notify(event: string, data: T): void {
    this.observers.forEach((observer) => observer.update(event, data));
  }
}