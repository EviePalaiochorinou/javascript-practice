// In JavaScript, "object" usually refers to a type of value, similar to a Ruby hash.
//Here's an example of a JavaScript object:
const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123',
  },
  hobbies: ['writing', 'tennis', 'cooking']
};
console.log(person.name)
console.log(person['name'])
console.log(person['address'])
//Print the value of the second hobbies value ('tennis').
console.log(person.address.city);
//Print the value of the second hobbies value ('tennis').
console.log(person.hobbies[1])