function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

let input = 9;

let output = isEvenOrOdd(input);
console.log(output);
