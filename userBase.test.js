const UserBase = require('./userBase')
const User = require('./user')


describe('UserBase', () => {
  const userBase = new UserBase([
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ]);

  it('counts the users', () => {
    expect(userBase.count()).toEqual(3)
  });

  it('gets the user names', () => {
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ])
  });

  it('greets the users', () => {
    expect(userBase.getIntroductions()).toEqual([ 'Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie' ])
  });
})