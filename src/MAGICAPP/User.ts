import { FileManager } from './FileManager.js';
import { Card } from './Card.js';
import chalk from 'chalk';

/**
 * Clase para manejar la información de los usuarios
 * Cada usuario tiene su directorio y su colección de cartas, donde
 * cada carta en un archivo JSON
 * @param username: string - Nombre de usuario
 * @param collection: Map<number, Card> - Colección de cartas del usuario
 * @param fileManager: FileManager - Instancia de la clase FileManager
 * @param loadCollection: () => void - Método para cargar la colección de cartas
 * @param addCard: (card: Card) => void - Método para agregar una carta a la colección
 * @param updateCard: (card: Card) => void - Método para actualizar una carta de la colección
 * @param removeCard: (cardId: number) => void - Método para eliminar una carta de la colección
 * @param listCards: () => void - Método para listar las cartas de la colección
 * @param getCard: (cardId: number) => Card | undefined - Método para obtener una carta de la colección
 */
export class User {
  /**
   * Colección de cartas del usuario
   * 
   */
  private collection: Map<number, Card>;

  /**
   * Instancia de la clase FileManager
   */
  private fileManager: FileManager;

  /**
   * Constructor de la clase para inicializar la colección de cartas y el FileManager
   * Se encarga de cargar la colección de cartas del usuario
   * @param username nombre de usuario
   */
  constructor(public username: string) {
    this.collection = new Map();
    this.fileManager = new FileManager(username);
    this.loadCollection();
  }

  /**
   * Método para cargar la colección de cartas
   * LLama al método load de la instancia de FileManager y guarda la colección de cartas
   * en la propiedad collection
   */
  private loadCollection(): void {
    this.collection = this.fileManager.load();
  }

  /**
   * Método para añadir una carta a la colección
   * Si la carta ya existe en la colección, muestra un mensaje de error
   * Si no existe, la añade a la colección y guarda la colección en un archivo JSON
   * Lo que hace es hacer un set de la carta en la colección y guardar la colección en un archivo JSON
   * @param card carta a añadir a la colección
   * @returns void NO retorna nada
   */
  public addCard(card: Card): void {
    if (this.collection.has(card.id)) {
      console.log(chalk.red(`Error: Card with ID ${card.id} already exists in the collection.`));
    } else {
      this.collection.set(card.id, card);
      this.fileManager.save(this.collection);
      console.log(chalk.green(`Card "${card.name}" added to ${this.username}'s collection.`));
    }
  }

  /**
   * Método que se encarga de actualizar una carta de la colección o modificarla
   * Si la carta no existe en la colección, muestra un mensaje de error
   * Si existe, la actualiza en la colección y guarda la colección en un archivo JSON
   * @param card carta a actualizar en la colección
   * @returns void NO retorna nada
   */
  public updateCard(card: Card): void {
    if (this.collection.has(card.id)) {
      this.collection.set(card.id, card);
      this.fileManager.save(this.collection);
      console.log(chalk.green(`Card "${card.name}" updated in ${this.username}'s collection.`));
    } else {
      console.log(chalk.red(`Error: Card with ID ${card.id} not found in the collection.`));
    }
  }

  /**
   * Método para eliminar una carta de la colección
   * Si la carta no existe en la colección, muestra un mensaje de error
   * Si existe, la elimina de la colección y guarda la colección en un archivo JSON
   * @param cardId número de identificación de la carta
   * @returns void NO retorna nada
   */
  public removeCard(cardId: number): void {
    if (this.collection.has(cardId)) {
      this.collection.delete(cardId);
      this.fileManager.save(this.collection);
      console.log(chalk.green(`Card with ID ${cardId} removed from ${this.username}'s collection.`));
    } else {
      console.log(chalk.red(`Error: Card with ID ${cardId} not found in the collection.`));
    }
  }

  /**
   * Método para listar las cartas de la colección
   * Muestra en consola la colección de cartas del usuario
   * @returns void NO retorna nada
   */
  public listCards(): void {
    console.log(chalk.blue(`Collection of ${this.username}:`));
    for (const card of this.collection.values()) {
      console.log(card);
    }
  }

  /**
   * Método para obtener una carta de la colección
   * Si la carta no existe en la colección, muestra un mensaje de error
   * @param cardId ID de la carta a obtener
   * @returns Retorna la carta si la encuentra, de lo contrario retorna undefined
   */
  public getCard(cardId: number): Card | undefined {
    const card = this.collection.get(cardId);
    if (card) {
      console.log(chalk.blue(`Information of card with ID ${cardId}:`));
      console.log(card);
    } else {
      console.log(chalk.red(`Error: Card with ID ${cardId} not found in the collection.`));
    }
    return card;
  }
}
