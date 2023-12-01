 
  import { Producto } from "./producto";
  import { Cliente } from "./cliente";
  // Uso del patrón Observer en la aplicación de consola
  const producto = new Producto("Zapatos nike", 70); // Crea un producto con precio inicial
  
  const cliente1 = new Cliente("Juan Zambrano"); // Crea los clientes
  const cliente2 = new Cliente("María Vera");
  const cliente3 = new Cliente("Lucía Solórzano");
  
  producto.agregar(cliente1); // Agrega clientes al producto
  producto.agregar(cliente2);
  producto.agregar(cliente3);
  
  // cambia de precio y notificar a los observadores
  producto.cambiarPrecio(50);
  // producto.cambiarPrecio(30);
  