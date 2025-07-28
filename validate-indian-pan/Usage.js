const validatePAN = require('validate-indian-pan');

console.log(validatePAN("ABCDE1234F")); // true
console.log(validatePAN("abcde1234f")); // false
