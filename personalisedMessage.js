const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
const generateMessages = (names) => {
    return names.map(name => {
      return `Hi ${name}! 50% off our best candies for you today!`;
    });
  }
console.log(generateMessages(names));


const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
const generateMessages = (names) => {
    return names.map(name => {
      return `Hi ${name}! 50% off our best candies for you today!`;
    });
  }
console.log(generateMessages(names));
// An array of objects!
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];
//Modify the function generateMessages so it uses this new structure
//and write the correct discount percentage in each message.
const generateMessagesImproved = (names) => {
    return names.map(object => {
      return `Hi ${object.name}! There is ${object.discount}% off our best candies for you today!`;
    });
  }
console.log(generateMessagesImproved(namesAndDiscounts));