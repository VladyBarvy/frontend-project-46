import { load } from 'js-yaml';
import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { cwd } from 'node:process';

const parserFunc = (filePath) => {
  // определение абсолютного пути для файла с Объектом (структурой данных)
  const absolutePath = resolve(cwd(), filePath);
  // далее определяем расширение рассматриваемого файла с Объектом
  const extension = extname(absolutePath).slice(1);
  // чтение файла
  const readingFile = readFileSync(resolve(cwd(), filePath), 'utf-8');
  // в соответствии с расширением преобразовываем данные из файла в удобночитаемый формат
  switch (extension) {
    case 'json':
      return JSON.parse(readingFile);
    case 'yml':
      return load(readingFile);
    case 'yaml':
      return load(readingFile);
    default:
      throw new Error('unexpected format of file');
  }
};
export default parserFunc;
