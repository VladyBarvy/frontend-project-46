import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (obj1, obj2) => {
    const file1 = path.resolve(obj1);   // определение абсолютного пути для файла с Объектом №1
    const file2 = path.resolve(obj2);   // определение абсолютного пути для файла с Объектом №2

    const rawDataFile1 = fs.readFileSync(file1);    // извлечение данных (объекта) из файла №1
    const jsonDataFile1 = JSON.parse(rawDataFile1); // преобразование данных из файла №1 в удобночитаемый формат json

    const rawDataFile2 = fs.readFileSync(file2);    // извлечение данных (объекта) из файла №1
    const jsonDataFile2 = JSON.parse(rawDataFile2); // преобразование данных из файла №2 в удобночитаемый формат json

    const fileKeys1 = Object.keys(jsonDataFile1);   // формирование массива из ключей Объекта №1
    const fileKeys2 = Object.keys(jsonDataFile2);   // формирование массива из ключей Объекта №2

    const allKeys = _.sortBy(_.union(fileKeys2, fileKeys1));    // объединение и последующая сортировка по алфавиту ключей, взятых из массивов

    const difference = (acc, key) => {
      if (_.has(jsonDataFile1, key) && _.has(jsonDataFile2, key)) {
        if (jsonDataFile1[key] === jsonDataFile2[key]) {
          acc.push(`  ${key}: ${jsonDataFile1[key]}`);
        } else {
          acc.push(`- ${key}: ${jsonDataFile1[key]}`);
          acc.push(`+ ${key}: ${jsonDataFile2[key]}`);
        }
      } else if (_.has(jsonDataFile1, key) && !_.has(jsonDataFile2, key)) {
        acc.push(`- ${key}: ${jsonDataFile1[key]}`);
      } else {
        acc.push(`+ ${key}: ${jsonDataFile2[key]}`);
      }
      return acc;
    };

    const diffs = allKeys.reduce(difference, []);

    return `{\n ${diffs.join('\n ')}\n}`;
};

export { genDiff };
