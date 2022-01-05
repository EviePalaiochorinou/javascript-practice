const addtoBatch = (array, number) => {
  if (array.length > 5) {
    return array;
  }

  return array.concat(number);
};

console.log(addtoBatch([], 8));
console.log(addtoBatch([1, 2], 8));
console.log(addtoBatch([1, 2, 3, 4, 5, 6], 8));

