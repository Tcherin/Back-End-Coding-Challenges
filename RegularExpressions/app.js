// const array = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const filteredArray = array.filter((string, index) => {
//   return index % 2 === 0;
// });

// console.log(filteredArray);

function toCamelCase(str) {
  const words = str.split(/[-_ ]/);
  return words.join("");
}

console.log(toCamelCase("the-shadow_warrior"));

// const isUpperCase = (string) => {
//   return /^[A-Z]*$/.test(string.charAt(0)) === true;
// };

// console.log(isUpperCase("itring"));

// if (/^[A-Z]*$/.test(string.charAt(0)) === true) {
//   console.log(true);
// } else {
//   console.log(false);
// }
