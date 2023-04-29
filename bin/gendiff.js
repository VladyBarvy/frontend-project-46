#!/usr/bin/env node

import genDiff from '../src/genDiffFunc.js';
import { Command } from 'commander';

const program = new Command();

program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format <type>', 'output format', 'stylish')
    .arguments('<filepath1> <filepath2>')

    .action((filepath1, filepath2, options) => {
    	const diff = genDiff(filepath1, filepath2, options.format);
    	console.log(diff);
    });


program.parse(process.argv);
