import type { Observer } from "./observer.interface";

export interface Subject<T> {
    subscribe(observer: Observer<T>): void
    unsubscribe(observer: Observer<T>): void
    notify(event: string, data: T): void
}