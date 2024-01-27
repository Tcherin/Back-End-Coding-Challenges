function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

const reverseSeq = (n) => {
  return Array.from({ length: n }, (_, i) => n - i);
};

console.log(reverseSeq(11));