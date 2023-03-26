#!/usr/bin/env node

const { program } = require('commander');

program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', "output the version number")
    .option('-h, --help', "display help for command")
    .option('-f, --format [type]')
    .arguments('<filepath1> <filepath2>')

program.parse();

const options = program.opts();

if (options.version) {
    console.log('Version: 1.0.0');
}

if (options.help) {
    console.log('  Usage: gendiff [options] <filepath1> <filepath2>');
    console.log('');
    console.log('  Compares two configuration files and shows a difference.');
    console.log('');
    console.log('  Options:');
    console.log('    -V, --version        output the version number');
    console.log('    -h, --help           display help for command');
    console.log('    -f, --format [type]  output format');
}


/*
program
  .version('1.0.0')
  .command('get [accountId]')
  .description('retrieves account info for the specified account')
  .option('-v, --verbose', 'display extended logging information')
  .action(getAccount)
  .parse(process.argv)
if (process.argv.length < 3) {
  program.help()
}
*/


/*
console.log('Usage: gendiff [options] <filepath1> <filepath2>');
console.log('  Compares two configuration files and shows a difference.');
console.log('');
console.log('  Options:');
console.log('    -V, --version        output the version number');
console.log('    -h, --help           display help for command');
console.log('    -f, --format [type]  output format');
*/
