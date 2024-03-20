// PRUEBAS PARA EL PROCESADOR DE ARCHIVOS

import 'mocha';
import { expect } from 'chai';
import { ProcesadorJSON} from '../../src/MODIFICACION/ProcesadorJSON.js';
import * as fs from 'fs';

// pruebas para la clase de procesar
describe('ProcesadorJSON', () => {
  // prueba para el metodo leerArchivo es una función
  it('leerArchivo es una función', () => {
    expect(ProcesadorJSON.prototype.leerArchivo).to.be.a('function');
  });
  // prueba para el metodo verificar es una función
  it('verificar es una función', () => {
    expect(ProcesadorJSON.prototype.verificar).to.be.a('function');
  });
  // comporbar que es una clase
  it('es una clase', () => {
    expect(ProcesadorJSON).to.be.a('function');
  });
  // prueba para el metodo procesar
  it('procesar es una función', () => {
    const procesador = new ProcesadorJSON();
    expect(procesador.procesar).to.be.a('function');
  });
  // prueba para el metodo verificar
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorJSON();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.true;
  });
 
  // prueba para el metodo verificar
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorJSON();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.true;
  });

  // prueba para verificar el if
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorJSON();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.true;
  });

  // prueba para verificar si la ongitud de beneficios es diferente a la de pesos
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorJSON();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6, 7]);
    expect(isValid).to.be.false;
  });
  // prueba para verificar si el indice i de beneficios o pesos es menor a 0
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorJSON();
    const isValid = procesador.verificar([-1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.false;
  });

  // prueba para el metodo leerArchivo json
  it('leerArchivo es una función', () => {
    const procesador = new ProcesadorJSON();
    expect(procesador.leerArchivo).to.be.a('function');
  });

  // prueba para el metodo leerArchivo
  it('leerArchivo lee correctamente los beneficios y pesos de un archivo JSON', () => {
    const procesador = new ProcesadorJSON();
    const contenido = JSON.stringify({
      elementos: [
        { beneficio: 1, peso: 2 },
        { beneficio: 3, peso: 4 },
      ],
    });
    fs.writeFileSync('archivo.json', contenido);
    expect(procesador.leerArchivo('archivo.json')).to.deep.equal([[1, 3], [2, 4]]);
    fs.unlinkSync('archivo.json');
  });
});
