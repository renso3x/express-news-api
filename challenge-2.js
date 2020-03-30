function calculateValidationNumber(input) {

  if(isNaN(input)) {
    return 'Not a number'
  }

  const splits = String(input).split('');

  function reduceMe(numbers) {
    if (numbers.length === 0) {
      return numbers;
    }

    const sum = numbers.reduce((total, currentValue) => {
      return total = total + parseInt(currentValue);
    }, 0);


    if (String(sum).length > 1) {
      return reduceMe(String(sum).split(''))
    }

    return sum;
  }

  return reduceMe(splits);
}

console.log(calculateValidationNumber('hello'));
console.log(calculateValidationNumber('444444'));
console.log(calculateValidationNumber(1234));
console.log(calculateValidationNumber(23478998));

