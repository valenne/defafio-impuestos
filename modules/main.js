import Impuestos from "./impuestos.js";
import Cliente from "./cliente.js";

let imp1 = new Impuestos(500000, 167000);
let c1 = new Cliente("Nelson Venegas", imp1);

console.log(
  `El cliente ${c1.getNombre()} tiene la siguiente informacion:\nMonto Bruto Anual: ${imp1.getMontoBrutoAnual()}\nDeducciones totales:${imp1.getDeducciones()}`
);

console.log(
  `El impuesto total a pagar por ${c1.getNombre()} es de: ${c1.cuantoPagare()}`
);
