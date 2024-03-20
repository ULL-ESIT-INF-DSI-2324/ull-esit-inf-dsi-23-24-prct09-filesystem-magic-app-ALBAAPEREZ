import { ProcesadorMochila } from './Procesator.js';
import fs from 'fs';

/**
 * Clase para procesar archivos JSON
 * Esta clase hereda de la clase ProcesadorMochila e implementa los métodos leerArchivo y verificar
 * @param leerArchivo: (archivo: string) => [number[], number[]] - Método para leer un archivo y devolver dos arreglos de números
 * @param verificar: (beneficios: number[], pesos: number[]) => boolean - Método para verificar si los datos leídos son válidos
 * @param procesar: (archivo: string) => [number[], number[]] - Método para procesar un archivo y devolver los beneficios y pesos
 */
export class ProcesadorJSON extends ProcesadorMochila {
  /**
   * Método para leer un archivo JSON y devolver dos arreglos de números
   * Lo que hace es leer el archivo JSON, extraer los beneficios y pesos y devolverlos
   * @param archivo archivo a leer
   * @returns retorna un arreglo con los beneficios y pesos
   */
  leerArchivo(archivo: string): [number[], number[]] {
    const beneficios: number[] = [];
    const pesos: number[] = [];
    const contenido = fs.readFileSync(archivo, 'utf-8');
    const data = JSON.parse(contenido);
    const elementos = data.elementos;
    for (const elemento of elementos) {
      beneficios.push(elemento.beneficio);
      pesos.push(elemento.peso);
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
