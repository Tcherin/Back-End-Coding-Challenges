function twoSum(numbers, target) {
    const numMap = {};
    const arraySearch = numbers.map((n, i) => {
      const complement = target - n;
      return numMap.hasOwnProperty(complement) ? [numMap[complement], i] : (numMap[n] = i, null);
    }).filter(pair => pair !== null)[0];
 
    return arraySearch || [];
 }

 const numbers = [2, 7, 11, 15];
 const target = 9;
 const result = twoSum(numbers, target);
 console.log(result);

