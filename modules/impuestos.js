export default class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  // get and set
  getMontoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  setMontoBrutoAnual(nuevo_monto) {
    this._montoBrutoAnual = nuevo_monto;
  }
  getDeducciones() {
    return this._deducciones;
  }
  setDeducciones(nueva_deduccion) {
    this._deducciones = nueva_deduccion;
  }
}
