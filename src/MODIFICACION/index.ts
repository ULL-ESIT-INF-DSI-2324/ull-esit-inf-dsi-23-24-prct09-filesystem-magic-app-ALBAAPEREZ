import { ProcesadorCSV } from './ProcesadorCSV.js';
import { ProcesadorJSON } from './ProcesadorJSON.js';

// Procesamiento de archivos CSV y JSON
const procesadorCSV = new ProcesadorCSV();
const procesadorJSON = new ProcesadorJSON();

const archivoCSV = './src/MODIFICACION/data/mochila.csv';
const archivoJSON = './src/MODIFICACION/data/mochila.json';

console.log("Procesando archivo CSV:");
const [beneficiosCSV, pesosCSV] = procesadorCSV.procesar(archivoCSV);
console.log("Beneficios:", beneficiosCSV);
console.log("Pesos:", pesosCSV);

console.log("\nProcesando archivo JSON:");
const [beneficiosJSON, pesosJSON] = procesadorJSON.procesar(archivoJSON);
console.log("Beneficios:", beneficiosJSON);
console.log("Pesos:", pesosJSON);
