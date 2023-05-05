import yaml from 'js-yaml';
import { readFileSync } from 'node:fs';
import path from 'path';

const parserFunc = (filePath) => {
  // определение абсолютного пути для файла с Объектом (структурой данных)
  const absolutePath = path.resolve(process.cwd(), filePath);
  // далее определяем расширение рассматриваемого файла с Объектом
  const extension = path.extname(absolutePath).slice(1);
  // в соответствии с определённым расширением преобразовываем данные из файла в удобночитаемый формат
  switch (extension) {
    case 'json':
      return JSON.parse(readFileSync(absolutePath, 'utf8'));
    case 'yml':
      return yaml.load(readFileSync(absolutePath, 'utf8'));
    case 'yaml':
      return yaml.load(readFileSync(absolutePath, 'utf8'));
    default:
      throw new Error('unexpected format of file');
  }
};
  /*
  if (path.extname(absolutePath).slice(1) === 'yml') {
    return yaml.load(readFileSync(absolutePath, 'utf8')); // преобразование данных из файла в удобночитаемый формат
  } else if (path.extname(absolutePath).slice(1) === 'yaml') {
    return yaml.load(readFileSync(absolutePath, 'utf8')); // преобразование данных из файла в удобночитаемый формат
  } else if (path.extname(absolutePath).slice(1) === 'json') {
    return JSON.parse(readFileSync(absolutePath, 'utf8')); // преобразование данных из файла в удобночитаемый формат
  }
  return 'unexpected format of file'; // если ни один из предполагаемых форматов не определён, то возвращаем сообщение
*/
export default parserFunc;
