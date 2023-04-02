#!/usr/bin/env node

import { genDiff } from '../src/genDiffFunc.js';
import { program } from 'commander';

program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format', 'output format')
    .arguments('<filepath1> <filepath2>')

    .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2);
    console.log(diff);
    });


program.parse();
