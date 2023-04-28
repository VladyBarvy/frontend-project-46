import yaml from 'js-yaml';
import { readFileSync } from 'node:fs';
import path from 'path';

const parserFunc = (filePath) => {
  const absolutePath = path.resolve(filePath);  // определение абсолютного пути для файла с Объектом (структурой данных)
  
  // далее определяем расширение рассматриваемого файла с Объектом
  if ((path.extname(absolutePath) === '.yml') || (path.extname(absolutePath) === '.yaml')) {
    return yaml.load(readFileSync(absolutePath, 'utf8'));   // преобразование данных из файла в удобночитаемый формат
  }

  if (path.extname(absolutePath) === '.json') {
    return JSON.parse(readFileSync(absolutePath, 'utf8'));   // преобразование данных из файла в удобночитаемый формат
  }

  return 'unexpected format of file';   // если ни один из предполагаемых форматов не определён, то возвращаем сообщение
};

export { parserFunc };
