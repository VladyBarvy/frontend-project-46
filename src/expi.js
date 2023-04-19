import _ from 'lodash';

const file1 = { one: 'eon', two: 'two', four: true };
const file2 = { two: 'own', zero: 4, four: true };

const genDiffReal = (obj1, obj2) => {
    const allKeys = _.union(Object.keys(obj1), Object.keys(obj2));
    
    
    const newArr1 = [];
    const newArr2 = [];
    const newArr3 = [];
    const newArr4 = [];

    const kiks = allKeys.map((key) => {
        if (_.has(obj1, key) && !_.has(obj2, key)) {
          return newArr1.push(key, 'deleted')
        } 

        
        if (!_.has(obj1, key) && _.has(obj2, key)) {
            return newArr2.push(key, 'added');
        }

        
        if (obj1[key] === obj2[key]) {
            return newArr3.push(key, 'unchanged');
        } 
        /*
        if (obj1[key] === obj2[key]) {
            if (obj1[value] === obj2[value]) {
                return newArr4.push(key, 'changed');
            }
        } 
*/
        const newArr = [...newArr1, ...newArr2, ...newArr3, ...newArr4];

        /*
        if (_.isObject(obj1[key]) && _.isObject(fobj2[key])) {
          return { name: key, value: findDifferences(obj1[key], obj2[key]), status: 'nested' };
        }

        return {
          name: key, oldValue: obj1[key], value: obj2[key], status: 'updated',
        };
        */

        return newArr;
      });

      return kiks; 
};

/*
const genDiffi = allKeys.map((key) => {
    if (_.has(file1, key) && !_.has(file2, key)) {
      return { name: key, value: file1[key], status: 'removed' };
    } if (!_.has(file1, key) && _.has(file2, key)) {
      return { name: key, value: file2[key], status: 'added' };
    }
    if (file1[key] === file2[key]) {
      return { name: key, value: file1[key], status: 'unchanged' };
    } if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { name: key, value: findDifferences(file1[key], file2[key]), status: 'nested' };
    }
    return {
      name: key, oldValue: file1[key], value: file2[key], status: 'updated',
    };
  });
*/

    //console.log();
  console.log(genDiffReal(file1, file2));


