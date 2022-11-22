import * as moduloController from './controller.js';
import chalk from 'chalk';

const sumar = moduloController.suma(1, 2);
const sumar2 = moduloController.suma(4, 5);

console.log(chalk.green(sumar));
console.log(chalk.green(sumar2));