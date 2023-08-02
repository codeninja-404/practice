function getSum(array) {
  let sum = 0;
  let arr1 = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
    if ( element % 2 ===0)
    {arr1 += element}

  }
  return [`${sum} is array sum`, `${arr1} is odd sum`]
}

const numbers = [12, 65, 45, 78, 32, 45, 91];
const outPut = getSum(numbers);
console.log(outPut);
