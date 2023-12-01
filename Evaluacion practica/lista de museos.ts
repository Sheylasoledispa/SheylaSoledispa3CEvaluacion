 // Clase Singleton que gestiona la lista de museos
 import { Museo } from "./museo";
 export class ListaMuseos {
    private static instancia: ListaMuseos;
    private museos: Museo[];
  
    private constructor() {
      this.museos = [];
    }
  
    public static obtenerInstancia(): ListaMuseos { // muestra la lista de los museos 
      if (!ListaMuseos.instancia) {
        ListaMuseos.instancia = new ListaMuseos();
      }
      return ListaMuseos.instancia; // retorna toda la lista 
    }
  
    public agregarMuseo(museo: Museo): void {  //metodo para agregar los museos 
      this.museos.push(museo);
    }
  
    public mostrarMuseos(): void {
      console.log("Lista de Museos:");
      this.museos.forEach((museo, index) => { //Nos ayuda en un ciclo 
        console.log(`Museo ${index + 1}:`);   // Aplicamos suma por cada vez que pasa por el forEach y muesta el museo 1, museo2 y museo 3 
        console.log(`Nombre: ${museo.nombre}`); // muestra el nombre del museo 
        console.log(`Ubicación: ${museo.ubicacion}`); // muestra la ubicacion del museo 
      });
    }
  }
 
