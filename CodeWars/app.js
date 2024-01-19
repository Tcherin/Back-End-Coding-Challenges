function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN(12345));

// const reverseSeq = (n) => {
//   return Array.from({ length: n }, (_, i) => n - i);
// };

// console.log(reverseSeq(11));

// function descendingOrder(n) {
//   const numArray = n.toString().split("").sort().reverse().join("");
//   const result = parseInt(numArray);
//   return result;
// }

// console.log(descendingOrder(1532123324));

// find digital root

// function digitalRoot(n) {
//   const newArray = createArray(n);
//   let total = getSum(newArray);
//   while (total > 9) {
//     const newerArray = createArray(total);
//     total = getSum(newerArray);
//   }
//   return total;
// }

// function createArray(n) {
//   const stringArray = n.toString().split("");
//   const numArray = stringArray.map((num) => {
//     return parseInt(num);
//   });
//   return numArray;
// }

// function getSum(numArray) {
//   const sum = numArray.reduce((total, currentValue) => {
//     return (total += currentValue);
//   }, 0);
//   return sum;
// }

// console.log(digitalRoot(758395));
