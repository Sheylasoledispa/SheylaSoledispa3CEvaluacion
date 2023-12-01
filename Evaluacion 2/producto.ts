  // Interfaz del Observador (Subscriber)
export interface Observador {
    actualizar(producto: string, precio_actual: number): void;
  }
  // Clase que representa el Producto (Subject)
  export class Producto {
    private observadores: Observador[] = [];
    private precio: number;
  
    constructor(private nombre: string, precio_inicial: number) {
      this.precio = precio_inicial;
    }
  
    agregar(observador: Observador): void {
      this.observadores.push(observador);
    }
  
    eliminar(observador: Observador): void {
      this.observadores = this.observadores.filter(obs => obs !== observador);
    }
  
    Precio(): number {
      return this.precio;
    }
  
    // Método para cambiar el precio y notificar a los observadores
    cambiarPrecio(nuevo_precio: number): void {
      if (nuevo_precio !== this.precio) {
        this.precio = nuevo_precio;
        this.notificar();
      }
    }
  
    // Notificar a todos los observadores sobre el cambio de precio
    private notificar(): void {
      this.observadores.forEach(observador => {
        observador.actualizar(this.nombre, this.precio);
      });
    }
  }
  
 