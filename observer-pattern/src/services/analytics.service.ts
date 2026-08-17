import type { Observer } from "../core/interfaces/observer.interface";

export class AnalyticsService<T> implements Observer<T> {
    update(event: string, data: T): void {
        console.log(`[Analytics] Procesando métricas para: ${event}`, data)
    }

    trackUserUpdate(userId: number): void {
        console.log(`[Analytics] Registrando actividad para el ID: ${userId}`)
    }
    
}