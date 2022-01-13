export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  // get and set

  getNombre() {
    return this._nombre;
  }
  setNombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }

  getImpuesto() {
    return this._impuesto;
  }
  setImpuesto(nuevo_impuesto) {
    return (this._impuesto = nuevo_impuesto);
  }

  // metodo
  cuantoPagare() {
    return (
      (this.getImpuesto().getMontoBrutoAnual() -
        this.getImpuesto().getDeducciones()) *
      0.21
    );
  }
}
