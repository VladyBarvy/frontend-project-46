import url from 'url';
import path, { dirname } from 'node:path';
import { test, expect } from '@jest/globals';
import genDiff from '../src/genDiffFunc.js';
import stylishDiff from '../__fixtures__/stylishDiff.js';
import plainDiff from '../__fixtures__/plainDiff.js';
import jsonDiff from '../__fixtures__/jsonDiff.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('test1 - nestedJsonStylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(stylishDiff);
});

test('test2 - nestedYmlStylish', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(stylishDiff);
});

test('test3 - nestedYamlStylish', () => {
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toEqual(stylishDiff);
});

test('test4 - nestedJsonPlain', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(plainDiff);
});

test('test5 - nestedYmlPlain', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(plainDiff);
});

test('test6 - nestedYamlPlain', () => {
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain')).toEqual(plainDiff);
});

test('test7 - nestedJson_JSON', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(jsonDiff);
});

test('test8 - nestedYml_JSON', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toEqual(jsonDiff);
});

test('test9 - nestedYaml_JSON', () => {
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json')).toEqual(jsonDiff);
});
