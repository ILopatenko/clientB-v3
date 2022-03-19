require('dotenv').config();

console.log('Default value of process.env', process.env);

process.env.LocalDataBase = { name: 'sdfsdf' };
/* {
  users: ['hi'],
  clients: [],
  vendors: [],
  orders: [],
}; */

console.log(process.env.LocalDataBase.name);
