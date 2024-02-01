function count(string) {
    const occurrences = {}
    string.split("").forEach((char) => occurrences[char] = occurrences[char] ? occurrences[char] + 1 : 1)
    return occurrences;
   }

console.log(count('strength'));