import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { parserFunc } from './parsers.js';

const genDiff = (obj1, obj2) => {
/*
  const file1 = path.resolve(obj1);   // определение абсолютного пути для файла с Объектом №1
  const file2 = path.resolve(obj2);   // определение абсолютного пути для файла с Объектом №2

  const rawDataFile1 = fs.readFileSync(file1);    // извлечение данных (объекта) из файла №1
  const jsonDataFile1 = JSON.parse(rawDataFile1); // преобразование данных из файла №1 в удобночитаемый формат json

  const rawDataFile2 = fs.readFileSync(file2);    // извлечение данных (объекта) из файла №1
  const jsonDataFile2 = JSON.parse(rawDataFile2); // преобразование данных из файла №2 в удобночитаемый формат json
*/
  // определяем расширение файлов и извлекаем из них данные для дальнейшей работы с ними
  const firstFile = parserFunc(obj1);
  const secondFile = parserFunc(obj2);

  const fileKeys1 = Object.keys(firstFile);   // формирование массива из ключей файла №1
  const fileKeys2 = Object.keys(secondFile);   // формирование массива из ключей файла №2

  const allKeys = _.sortBy(_.union(fileKeys2, fileKeys1));    // объединение и последующая сортировка по алфавиту ключей, взятых из массивов

  const difference = (acc, key) => {
    if (_.has(firstFile, key) && _.has(secondFile, key)) {
      if (firstFile[key] === secondFile[key]) {
        acc.push(`  ${key}: ${firstFile[key]}`);
      } else {
        acc.push(`- ${key}: ${firstFile[key]}`);
        acc.push(`+ ${key}: ${secondFile[key]}`);
      }
    } else if (_.has(firstFile, key) && !_.has(secondFile, key)) {
      acc.push(`- ${key}: ${firstFile[key]}`);
    } else {
      acc.push(`+ ${key}: ${secondFile[key]}`);
    }
    return acc;
  };

  const diffs = allKeys.reduce(difference, []);

  return `{\n ${diffs.join('\n ')}\n}`;
};

export { genDiff };
