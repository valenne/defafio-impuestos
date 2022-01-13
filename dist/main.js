"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let imp1 = new _impuestos.default(500000, 167000);
let c1 = new _cliente.default("Nelson Venegas", imp1);
console.log(`El cliente ${c1.getNombre()} tiene la siguiente informacion:\nMonto Bruto Anual: ${imp1.getMontoBrutoAnual()}\nDeducciones totales:${imp1.getDeducciones()}`);
console.log(`El impuesto total a pagar por ${c1.getNombre()} es de: ${c1.cuantoPagare()}`);