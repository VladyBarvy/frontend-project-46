import url from 'url';
import fs from 'fs';
import path, { dirname } from 'node:path';
import { genDiff } from '../src/genDiffFunc.js';
import { test, expect } from '@jest/globals';
import nestedDiff from '../__fixtures__/nestedDiff.js';
import plainDiff from '../__fixtures__/plainDiff.js';


const jsonDiff = JSON.stringify(JSON.parse(fs.readFileSync('../__fixtures__/jsonDiff.json', 'utf8')));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('test1 - nestedJsonStylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(nestedDiff);
});
test('test2 - nestedYmlStylish', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(nestedDiff);
});
test('test3 - nestedYmlPlain', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(plainDiff);
});
test('test4 - nestedJsonStylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(plainDiff);
});
/*
test('test5 - nestedJson', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(jsonDiff);
});
*/
