#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiffFunc.js';

const program = new Command();
program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const diff = genDiff(filepath1, filepath2, program.opts().format);
    console.log(diff);
/*
    const options_birs = program.opts();
    console.log(options_birs);
    const options_kiks = program.opts().format;
    console.log(options_kiks);
    const options_twiks = options.format;
    console.log(options_twiks);
*/

  });
//program.parse(process.argv);
program.parse();
