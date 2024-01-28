function squareDigits(num){
    return parseInt(num.toString().split("").map((number) => parseInt(number) ** 2).join(""), 10);
  }

const num = 2112;
console.log(squareDigits(num));