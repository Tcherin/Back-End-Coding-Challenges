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
