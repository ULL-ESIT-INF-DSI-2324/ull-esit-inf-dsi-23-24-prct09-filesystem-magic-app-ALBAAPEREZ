import { ProcesadorMochila } from './Procesator.js';
import fs from 'fs';

/**
 * Clase para procesar archivos CSV 
 * Esta clase hereda de la clase ProcesadorMochila e implementa los métodos leerArchivo y verificar
 * @param leerArchivo: (archivo: string) => [number[], number[]] - Método para leer un archivo y devolver dos arreglos de números
 * @param verificar: (beneficios: number[], pesos: number[]) => boolean - Método para verificar si los datos leídos son válidos
 * @param procesar: (archivo: string) => [number[], number[]] - Método para procesar un archivo y devolver los beneficios y pesos
 */
export class ProcesadorCSV extends ProcesadorMochila {

  /**
   * Método para leer un archivo CSV y devolver dos arreglos de números
   * Lo que hace es leer el archivo CSV, extraer los beneficios y pesos y devolverlos
   * @param archivo archivo a leer
   * @returns retorna un arreglo con los beneficios y pesos
   */
  leerArchivo(archivo: string): [number[], number[]] {
    const beneficios: number[] = [];
    const pesos: number[] = [];
    const contenido = fs.readFileSync(archivo, 'utf-8');
    const lineas = contenido.trim().split('\n');
    const numElementos = parseInt(lineas[1]);
    for (let i = 2; i < 2 + numElementos; i++) {
      const [peso, beneficio] = lineas[i].split(',').slice(1).map(Number);
      beneficios.push(beneficio);
      pesos.push(peso);
    }
    return [beneficios, pesos];
  }

  /**
   * Método para verificar si los datos leídos son válidos
   * Verifica que los beneficios y pesos sean mayores o iguales a cero
   * @param beneficios  beneficios a verificar
   * @param pesos pesos a verificar
   * @returns retorna true si los datos son válidos, false si no lo son
   */
  verificar(beneficios: number[], pesos: number[]): boolean {
    if (beneficios.length !== pesos.length) {
      return false;
    }
    for (let i = 0; i < beneficios.length; i++) {
      if (beneficios[i] < 0 || pesos[i] < 0) {
        return false;
      }
    }
    return true;
  }
}
