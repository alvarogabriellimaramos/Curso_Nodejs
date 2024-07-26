const _ = require('lodash');
const chalk = require('chalk')
const array1 = ['alvaro','pedro','gabriel','lima'];
const array2 = ['alvaro','lima','ramos','neide'];

const diff = _.difference(array1,array2);

console.log(chalk.red.bold(diff));