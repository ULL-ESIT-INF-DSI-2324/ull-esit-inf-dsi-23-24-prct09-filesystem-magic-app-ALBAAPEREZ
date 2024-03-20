// PRUEBAS PARA EL PROCESADOR DE ARCHIVOS

import 'mocha';
import { expect } from 'chai';
import { ProcesadorMochila} from '../../src/MODIFICACION/Procesator.js';
import { ProcesadorCSV } from '../../src/MODIFICACION/ProcesadorCSV.js';
import * as fs from 'fs';

// pruebas para la clase de procesar
describe('ProcesadorMochila', () => {
  // prueba para el metodo procesar es una función
  it('procesar es una función', () => {
    expect(ProcesadorMochila.prototype.procesar).to.be.a('function');
  });
  // comporbar que es una clase
  it('es una clase', () => {
    expect(ProcesadorMochila).to.be.a('function');
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
  // prueba para el metodo leer
  it('leerArchivo es una función', () => {
    const procesador = new ProcesadorCSV();
    expect(procesador.leerArchivo).to.be.a('function');
  });
  // prueba para comprpobar si es valido o no, si no lo es entonces es false
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.true;
  });
  // prueba para verificar si la longitud de beneficios es diferente a la de pesos
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.verificar([1, 2, 3], [4, 5, 6, 7]);
    expect(isValid).to.be.false;
  });
  // si es valido retona un array con los beneficios y pesos
  it('verificar verifica los datos leídos', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.verificar([-1, 2, 3], [4, 5, 6]);
    expect(isValid).to.be.false;
  });
  // cerificar que lo que retorna es un array
  it('procesar retorna un array', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.procesar('archivo.csv');
    expect(isValid).to.be.an('array');
  });

  // comprobar que lo que retorna es un array de beneficios y pesos
  it('procesar retorna un array de beneficios y pesos', () => {
    const procesador = new ProcesadorCSV();
    const isValid = procesador.procesar('archivo.csv');
    expect(isValid).to.be.an('array');
  });
  
});