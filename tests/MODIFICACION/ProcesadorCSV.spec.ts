// PRUEBAS PARA EL PROCESADOR DE ARCHIVOS

import 'mocha';
import { expect } from 'chai';
import { ProcesadorCSV} from '../../src/MODIFICACION/ProcesadorCSV.js';

// pruebas para la clae procesatorcsv
describe('ProcesadorCSV', () => {
  // prueba para el metodo leerArchivo es una función
  it('leerArchivo es una función', () => {
    expect(ProcesadorCSV.prototype.leerArchivo).to.be.a('function');
  });
  // prueba para el metodo verificar es una función
  it('verificar es una función', () => {
    expect(ProcesadorCSV.prototype.verificar).to.be.a('function');
  });
  // comporbar que es una clase
  it('es una clase', () => {
    expect(ProcesadorCSV).to.be.a('function');
  });
  // prueba para el metodo procesar
  it('procesar es una función', () => {
    const procesador = new ProcesadorCSV();
    expect(procesador.procesar).to.be.a('function');
  });
  // prueba para el metodo verificar
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.true;
  });
 
  // prueba para el metodo verificar
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.true;
  });

  // comprobar: que si la longitud de beneficios es diferente a la de pesos, entonces no es valido
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6, 7]);
    expect(isValid).to.be.false;
  });

  // si el indice i de beneficios o pesos es menor a 0, entonces no es valido
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.verificar([-1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.false;
  });


});
