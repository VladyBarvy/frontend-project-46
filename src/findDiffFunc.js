import _ from 'lodash';
const findDifferences = (file1, file2) => {
  const allKeys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
  const differences = allKeys.map((key) => {
    if (_.has(file1, key) && !_.has(file2, key)) {
      return { name: key, value: file1[key], status: 'removed' };
    }
    if (!_.has(file1, key) && _.has(file2, key)) {
      return { name: key, value: file2[key], status: 'added' };
    }
    if (file1[key] === file2[key]) {
      return { name: key, value: file1[key], status: 'unchanged' };
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { name: key, value: findDifferences(file1[key], file2[key]), status: 'nested' };
    }
    return {
       name: key, oldValue: file1[key], value: file2[key], status: 'updated',
    };
  });
  return differences;
};

export default findDifferences;
