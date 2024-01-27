function fakeBin(x){
    const numberArray = x.split("").map((string) => parseInt(string));
    return result = numberArray.map((number) => number < 5 ? 0 : 1).join("");
  }

  const x = "1029384756"
  console.log(fakeBin(x))