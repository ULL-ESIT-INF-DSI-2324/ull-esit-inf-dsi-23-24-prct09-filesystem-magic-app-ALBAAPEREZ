/**
 * Interfaz para la información de las cartas
 * Esta interfaz se utiliza para definir la estructura de los datos que se van a utilizar en la aplicación
 * @param id: number - Identificador de la carta
 * @param name: string - Nombre de la carta
 * @param manaCost: number - Costo de mana de la carta
 * @param color: string - Color de la carta
 * @param cardType: string - Tipo de carta
 * @param rarity: string - Rareza de la carta
 * @param rulesText: string - Texto de reglas de la carta
 * @param power: number - Poder de la carta
 * @param toughness: number - Resistencia de la carta
 * @param loyalty: number - Lealtad de la carta
 * @param marketValue: number - Valor de mercado de la carta
 */
export interface Card {
  id: number;
  name: string;
  manaCost: number;
  color: string;
  cardType: string;
  rarity: string;
  rulesText: string;
  power: number;
  toughness: number;
  loyalty: number;
  marketValue: number;
}