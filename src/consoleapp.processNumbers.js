const numbersFunction = require("./processNumbers");
const response = numbersFunction();
const text=JSON.stringify(response)
console.log(text);