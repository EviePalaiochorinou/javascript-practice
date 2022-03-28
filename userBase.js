import { User } from './user.js'
//const User = require('./user')

class UserBase {
  constructor(users) {
    this.users = users;
  }
  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(user => {
      return user.name;
    })
  }

  getIntroductions() {
    return this.users.map(user => {
      return `Hi, my name is ${user.name}`;
    });
  }
}
 
const userBase3 = new UserBase([
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
]);

console.log(userBase3.count())
console.log(userBase3.getNames())
console.log(userBase3.getIntroductions())

module.exports = UserBase;
