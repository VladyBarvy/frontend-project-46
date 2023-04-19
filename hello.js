//import path from 'path';
//const absolutePath = path.resolve(file1.json);
//console.log(absolutePath);

const users = [
    { name: 'Igor', age: 19 },
    { name: 'Danil', age: 1 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
  ];
  
  /*
  const result = [];
  for (const { name } of users) {
    result.push(name);
  }
  
  console.log(result);
*/

const names = users.map((user) => user.name);
console.log(names);
