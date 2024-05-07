let total = 10 + (5 * 2) / 2 + 20;
console.log(total);

let isNan = "is not a number" / 2,
  isNanTwo = +"is not a number";

console.log(isNan, isNanTwo);

// Com os operadores + e - é possível fazer operações com strings que são números, por exemplo:
const sum = +"200" + 50;
console.log(sum);

let increment = 5;
// increment++;

console.log(++increment);

const number = "80";
const unit = "kg";
let weight = number + unit;
let weightForTwo = number / 2 + unit;

console.log(weight, weightForTwo);
