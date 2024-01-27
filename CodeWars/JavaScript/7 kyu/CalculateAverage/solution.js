function findAverage(array) {
  return array.length !== 0 ? array.reduce((acc, number) => acc + number, 0) / array.length : 0;
  }