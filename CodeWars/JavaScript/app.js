function comp(array1, array2){
    const arraySquared = array1.map((number) => {
      return number * number
    })

  const sortedArray1 = arraySquared.sort().join("")
  const sortedArray2 = array2.sort().join("")

  if(sortedArray1 === sortedArray2){
    return true
}
}

array1 = [121, 144, 19, 161, 19, 144, 19, 11]  
array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(array1, array2))


// function findAverage(array) {
//   return array.length !== 0 ? array.reduce((acc, number) => acc + number, 0) / array.length : 0;
//   }


// const number = function(busStops){
//   const flattenedArray = busStops.reduce((acc, stop) => acc.concat(stop), []);
  
//   const peopleOnAndOff = flattenedArray.reduce((acc, persons, index) => {
//     index % 2 === 0 ? acc.totalOn += persons : acc.totalOff += persons
//     return acc
//   }, {totalOn: 0, totalOff: 0})
//   return peopleOnAndOff.totalOn - peopleOnAndOff.totalOff
// } 

// const busStops = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
// const result = number(busStops);
// console.log(result);

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }

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
