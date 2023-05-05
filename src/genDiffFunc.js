import parserFunc from './parsers.js';
import formatter from '../formatters/index.js';
import findDifferences from './findDiffFunc.js';

const genDiff = (filePath1, filePath2, formatType = 'stylish') => {
  const firstFile = parserFunc(filePath1);
  const secondFile = parserFunc(filePath2);
  return formatter(findDifferences(firstFile, secondFile), formatType);
};

export default genDiff;
