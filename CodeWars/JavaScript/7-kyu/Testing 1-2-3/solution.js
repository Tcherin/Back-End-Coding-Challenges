// original answer

var number=function(array) {
  if (array.length === 0){
    return []
  }
  const numberedArray = array.map((string, index) => {
    return `${index + 1}: ${string}`
  })
  return numberedArray
}

  // refactored code

  const number = function(array) {
    return array.length === 0 ? [] : array.map((string, index) => `${index + 1}: ${string}`);
   }