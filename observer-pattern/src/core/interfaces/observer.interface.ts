export interface Observer<T> {
    update(event: string, data: T): void
}