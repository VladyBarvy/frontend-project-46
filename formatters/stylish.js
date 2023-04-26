
import _ from 'lodash';

const stylish = (currentKey, currentValue, depth) => {
  if (!_.isObject(currentValue)) {
    return `${currentKey}: ${currentValue}`;
  }
  const indentBefore = '  '.repeat(depth);
  const bracketIndent = '  '.repeat(depth - 1);
  const lines = Object.entries(currentValue).flatMap(([key, ent]) => `  ${stylish(key, ent, depth + 2)}`);

  return `${currentKey}: {\n${indentBefore}${lines.join(`\n${indentBefore}`)}\n${bracketIndent}}`;
};

const stylishFormatter = (tree) => {
  const iter = (objects, depth) => {
    const indentBefore = '  '.repeat(depth);
    const bracketIndent = '  '.repeat(depth - 1);
    const stylishedObjects = objects.flatMap((object) => {
      const { name, value, status } = object;
      const line = stylish(name, value, depth + 2);
      if (status === 'removed') {
        return `- ${line}`;
      } if (status === 'added') {
        return `+ ${line}`;
      } if (status === 'unchanged') {
        return `  ${line}`;
      } if (status === 'updated') {
        return [`- ${stylish(name, object.oldValue, depth + 2)}`, `+ ${line}`];
      } if (status === 'nested') {
        return `  ${name}: ${iter(value, depth + 2)}`;
      }
      
    });
    return `{\n${indentBefore}${stylishedObjects.join(`\n${indentBefore}`)}\n${bracketIndent}}`;
  };
  return iter(tree, 1);
};

export default stylishFormatter;



/*
import _ from 'lodash';

const createIndent = (level) => {
  const replacer = '  ';
  const spacesCount = 2;
  const indentSize = level * spacesCount;

  const indents = {
    openBracket: replacer.repeat(indentSize - 1),
    closeBracket: replacer.repeat(indentSize - spacesCount),
  };

  return indents;
};

const stringify = (val, depth) => {
  if (!_.isObject(val)) {
    return String(val);
  }
  const indents = createIndent(depth);

  const lines = Object.entries(val).map(([key, value]) => {
    if (!_.isObject(value)) {
      return `${indents.openBracket}  ${key}: ${value}`;
    }

    return `${indents.openBracket}  ${key}: ${stringify(value, depth + 1)}`;
  });

  return ['{', ...lines, `${indents.closeBracket}}`].join('\n');
};

const stylish = (currentValue, depth = 1) => {
  const indents = createIndent(depth);

  const lines = currentValue.map((line) => {
    const makeValue = stringify(line.value, depth + 1);

    switch (line.type) {
      case 'added':
        return `${indents.openBracket}+ ${line.key}: ${makeValue}`;
      case 'removed':
        return `${indents.openBracket}- ${line.key}: ${makeValue}`;
      case 'updated':
        return `${indents.openBracket}- ${line.key}: ${stringify(
          line.removedValue,
          depth + 1,
        )}\n${indents.openBracket}+ ${line.key}: ${stringify(
          line.addedValue,
          depth + 1,
        )}`;
      case 'unchanged':
        return `${indents.openBracket}  ${line.key}: ${makeValue}`;
      case 'nested':
        return `${indents.openBracket}  ${line.key}: ${stylish(
          line.children,
          depth + 1,
        )}`;
      default:
        throw new Error(`Unknown type: '${line.type}'`);
    }
  });
  return ['{', ...lines, `${indents.closeBracket}}`].join('\n');
};

export default stylish;
*/
