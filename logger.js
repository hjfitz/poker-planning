const chalk = require('chalk');

// use some currying magic to create loggers with different prefixes
const print = (prefix, msg) => msg => {
  console.log(`${chalk.bold(prefix)} ${msg}`);
};

module.exports = print;
