import stylishFormatter from './stylish.js';
import plainFormatter from './plain.js';
import jsonFormatter from './json.js';

const formatter = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormatter(data);
    case 'plain':
      return plainFormatter(data);
    case 'json':
      return jsonFormatter(data);
    default:
      throw new Error(`Unknown format ${format}`);
  }
};

export default formatter;
