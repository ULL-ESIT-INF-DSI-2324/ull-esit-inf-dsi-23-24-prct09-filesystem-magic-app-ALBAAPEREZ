/**
 * Clase abstracta que define el comportamiento de un procesador de archivos.
 * Esta clase define un método abstracto para leer un archivo y otro para verificar
 * si los datos leídos son válidos.
 * @param leerArchivo: (archivo: string) => [number[], number[]] - Método para leer un archivo y devolver dos arreglos de números
 * @param verificar: (beneficios: number[], pesos: number[]) => boolean - Método para verificar si los datos leídos son válidos
 * @param procesar: (archivo: string) => [number[], number[]] - Método para procesar un archivo y devolver los beneficios y pesos
 */
export abstract class ProcesadorMochila {
  /**
   * Constructor de la clase ProcesadorMochila
   * No recibe parámetros 
   */
  constructor() {}

  /**
   * Métdodo para procesar un archivo y devolver los beneficios y pesos
   * Lo que hace es leer el archivo, verificar si los datos son válidos y devolver los beneficios y pesos
   * @param archivo archivo a procesar
   * @returns retorna un arreglo con los beneficios y pesos
   */
  procesar(archivo: string): [number[], number[]] {
    const [beneficios, pesos] = this.leerArchivo(archivo);
    const isValid = this.verificar(beneficios, pesos);
    // si no es válido, lanza un error
    if (!isValid) {
      throw new Error("Los beneficios y pesos no son válidos.");
    }
    return [beneficios, pesos];
  }

  /**
   * Método abstracto para leer un archivo y devolver dos arreglos de números
   * @param archivo archivo a leer
   */
  abstract leerArchivo(archivo: string): [number[], number[]];

  /**
   * Método abstracto para verificar si los datos leídos son válidos
   * @param beneficios beneficios a verificar
   * @param pesos pesos a verificar
   */
  abstract verificar(beneficios: number[], pesos: number[]): boolean;
}
