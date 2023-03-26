#!/usr/bin/env node

const { program } = require('commander');

program
  .option('-h')

program.parse();

console.log('Usage: gendiff [options]');
console.log('  Compares two configuration files and shows a difference.');
console.log('');
console.log('  Options:');
console.log('    -V, --version        output the version number');
console.log('    -h, --help           display help for command');
