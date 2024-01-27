function descendingOrder(n) {
  const numArray = n.toString().split("").sort().reverse().join("");
  const result = parseInt(numArray);
  return result;
}

console.log(descendingOrder(1532123324));