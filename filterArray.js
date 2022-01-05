const checkLength = (phonenumber) => {
  if (phonenumber.length <= 10) {
    return true;
  }
};

console.log(checkLength("1234567"));

const filterLongNumbers = (array) => {
  return newarray = array.filter(checkLength);
};

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

console.log(filterLongNumbers(numbers));