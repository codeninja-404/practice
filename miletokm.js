function milesToKilo(miles) {
  const km = parseFloat(miles * 1.609344);
  return km;
}

let input = 36;

let output =parseFloat(milesToKilo(input).toFixed(5));
console.log(output);
