import fs from 'fs';
import { Card } from './Card.js';

/**
 * Clase para manejar la lectura y escritura de archivos JSON
 * Esta clase se utiliza para guardar y cargar la información de las cartas en archivos JSON
 * @param username: string - Nombre de usuario
 * @param userDir: string - Directorio del usuario
 * @param getFilePath: (cardId: number) => string - Función para obtener la ruta del archivo de una carta
 * @param save: (collection: Map<number, Card>) => void - Método para guardar la colección de cartas
 * @param load: () => Map<number, Card> - Método para cargar la colección de cartas
 */
export class FileManager {
  /**
   * Directorio del usuario para guardar los archivos JSON
   * @param userDir: string
   */
  private readonly userDir: string;

  /**
   * Constructor de la clase para inicializar el directorio del usuario
   * Se crea el directorio del usuario si no existe al momento de instanciar la clase
   * @param username nombre de usuario
   */
  constructor(private username: string) {
    this.userDir = `./users/${this.username}`;
  }

  /**
   * Método para obtener la ruta del archivo de una carta
   * @param cardId número de identificación de la carta
   * @returns string - Ruta del archivo de la carta
   */
  private getFilePath(cardId: number): string {
    return `${this.userDir}/card${cardId}.json`;
  }

  /**
   * Método para guardar la colección de cartas
   * Lo que hace es comprobar si existe el directorio del usuario, si no existe lo crea
   * Luego recorre la colección de cartas y guarda cada una en un archivo JSON dentro del 
   * directorio del usuario indicado
   */
  public save(collection: Map<number, Card>): void {
    if (!fs.existsSync(this.userDir)) {
      fs.mkdirSync(this.userDir, { recursive: true });
    }
    for (const [cardId, card] of collection) {
      fs.writeFileSync(this.getFilePath(cardId), JSON.stringify(card, null, 2));
    }
  }

  /**
   * Método para cargar la colección de cartas
   * Lo que hace es comprobar si existe el directorio del usuario, si no existe retorna un nuevo Map vacío
   * Si existe el directorio, lee los archivos JSON de las cartas y las guarda en un Map
   * @returns retorna un Map con la colección de cartas. los muestra en consola
   */
  public load(): Map<number, Card> {
    const collection = new Map<number, Card>();
    if (fs.existsSync(this.userDir)) {
      const files = fs.readdirSync(this.userDir);
      for (const file of files) {
        const data = fs.readFileSync(`${this.userDir}/${file}`, 'utf-8');
        const card = JSON.parse(data) as Card;
        collection.set(card.id, card);
      }
    }
    return collection;
  }
}
