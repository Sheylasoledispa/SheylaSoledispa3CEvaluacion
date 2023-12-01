 
 import { ListaMuseos } from "./lista de museos";
 import { Museo } from "./museo";
 // Creación de objetos Museo
  const museo1 = new Museo("Museo Metropolitano de Arte (Metropolitan Museum of Art)", "Nueva York, Estados Unidos");
  const museo2 = new Museo("Museo Británico (British Museum)", "Londres, Reino Unido");
  const museo3 = new Museo("Museo Mori Art", "Tokio, Japón");
  
  // Obtener la única instancia de la lista de museos
  const listaMuseos = ListaMuseos.obtenerInstancia();
  
  // Agregar museos a la lista
  listaMuseos.agregarMuseo(museo1);
  listaMuseos.agregarMuseo(museo2);
  listaMuseos.agregarMuseo(museo3);
  
  // Mostrar los museos por pantalla desde la instancia única
  listaMuseos.mostrarMuseos();
  