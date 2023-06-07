const helloWorldFunction = require("./helloWorld");
const response = helloWorldFunction();
const text=JSON.stringify(response)
console.log(text);
