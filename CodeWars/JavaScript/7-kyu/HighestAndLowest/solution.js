function highAndLow(numbers) {
    sortedArray = numbers.split(" ").filter((c) => c !== "").sort((a, b) => a - b);
    const lowest = sortedArray[0];
    const highest = sortedArray[sortedArray.length - 1];
    return [lowest, highest];
}

const numbers = "1 4 3 1 5 -6"
console.log(highAndLow(numbers))