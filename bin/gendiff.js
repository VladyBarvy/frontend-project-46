#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiffFunc.js';

const program = new Command();
program
  .version('1.0.0')
  .usage('[options] < filepath1 > <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const result = genDiff(filepath1, filepath2, program.opts().format);
    console.log(result);
  });

program.parse();
