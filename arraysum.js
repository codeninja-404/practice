function getSum(array) {
  let sum = 0;
  let evenSum = 0;
  let oddSum =0
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
    if ( element % 2 ===0)
    {evenSum += element}
    else{
        oddSum += element
    }

  }
  return [`${sum} is array sum`, `${evenSum} is even sum` , `${oddSum} is odd sum`]
}

const numbers = [12, 65, 45, 78, 32, 45, 91];
const outPut = getSum(numbers);
console.log(outPut);
