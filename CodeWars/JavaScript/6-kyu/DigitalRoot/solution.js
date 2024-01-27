function digitalRoot(n) {
  const newArray = createArray(n);
  let total = getSum(newArray);
  while (total > 9) {
    const newerArray = createArray(total);
    total = getSum(newerArray);
  }
  return total;
}

function createArray(n) {
  const stringArray = n.toString().split("");
  const numArray = stringArray.map((num) => {
    return parseInt(num);
  });
  return numArray;
}

function getSum(numArray) {
  const sum = numArray.reduce((total, currentValue) => {
    return (total += currentValue);
  }, 0);
  return sum;
}

console.log(digitalRoot(758395));