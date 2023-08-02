function isLeapYear(year) {
  if (year % 4 === 0) {
    return `${year} is leap year`;
  } else {
    return `${year} is not leap year`;
  }
}

let input = 2004;

let output = isLeapYear(input);

console.log(output);
