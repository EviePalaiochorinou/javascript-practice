const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('returns "Fizz" if the number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });
  it('returns "Buzz" if the number is divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz')
  });
  it('returns "FizzBuzz" if the number is divisible by 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });
  it('returns the number if otherwise', () => {
    expect(fizzBuzz(1)).toBe(1)
  });
});