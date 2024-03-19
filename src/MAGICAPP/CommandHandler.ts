import { User } from './User.js';
import { Card } from './Card.js';
import { Argv } from 'yargs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';



///////////////////// Comando para agregar una carta ////////////////////////
export class CommandHandler {
    static addCommand(yargs: Argv): Argv {
        return yargs.command('add', 'Add a new card to the collection', {
            user: {
                describe: 'Username',
                demandOption: true,
                type: 'string'
            },
            id: {
                describe: 'Card ID',
                demandOption: true,
                type: 'number'
            },
            name: {
                describe: 'Card name',
                demandOption: true,
                type: 'string'
            },
            manaCost: {
                describe: 'Mana cost',
                demandOption: false,
                type: 'number'
            },
            color: {
                describe: 'Card color',
                demandOption: false,
                type: 'string'
            },
            cardType: {
                describe: 'Card type',
                demandOption: false,
                type: 'string'
            },
            rarity: {
                describe: 'Card rarity',
                demandOption: false,
                type: 'string'
            },
            rulesText: {
                describe: 'Rules text',
                demandOption: false,
                type: 'string'
            },
            power: {
                describe: 'Card power',
                demandOption: false,
                type: 'number'
            },
            toughness: {
                describe: 'Card toughness',
                demandOption: false,
                type: 'number'
            },
            loyalty: {
                describe: 'Card loyalty',
                demandOption: false,
                type: 'number'
            },
            marketValue: {
                describe: 'Market value',
                demandOption: true,
                type: 'number'
            }
        }, (argv) => {
						const { user, id, name, marketValue } = argv;
						const manaCost = argv.manaCost || 0;
						const color = argv.color || 'unknown';
						const cardType = argv.cardType || 'unknown';
						const rarity = argv.rarity || 'unknown';
						const rulesText = argv.rulesText || 'unknown';
						const power = argv.power || 0;
						const toughness = argv.toughness || 0;
						const loyalty = argv.loyalty || 0;
						const card: Card = { id, name, manaCost, color, cardType, rarity, rulesText, power, toughness, loyalty, marketValue };
            const userObj = new User(user); // Creamos un nuevo objeto User
            userObj.addCard(card); // Llamamos al método addCard del objeto User
        });
    }

    // Implementa métodos similares para otros comandos: update, remove, list, read
}

// Aquí está la línea para parsear los argumentos
yargs(hideBin(process.argv)).argv;


///////////////////// COmando para modificar una carta ////////////////////////



///////////////////// COmando para eliminar una carta ////////////////////////



///////////////////// COmando para listar las cartas ////////////////////////



///////////////////// COmando para mostrar una carta ////////////////////////