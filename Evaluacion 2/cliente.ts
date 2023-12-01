 // Clase Cliente que actúa como Observador
 import { Observador } from "./producto";
 export class Cliente implements Observador {
    constructor(private nombre: string) {}
  
    actualizar(producto: string, precio_actual: number): void {
      console.log(`[${this.nombre}]  Aviso: El precio del producto ${producto} Se le presenta un cambio con descuento a ${precio_actual}`);
    }
  }
 