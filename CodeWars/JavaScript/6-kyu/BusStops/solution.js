const number = function(busStops){
  const flattenedArray = busStops.reduce((acc, stop) => acc.concat(stop), []);
  
  const peopleOnAndOff = flattenedArray.reduce((acc, persons, index) => {
    index % 2 === 0 ? acc.totalOn += persons : acc.totalOff += persons
    return acc
  }, {totalOn: 0, totalOff: 0})
  return peopleOnAndOff.totalOn - peopleOnAndOff.totalOff
} 

const busStops = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
const result = number(busStops);
console.log(result);