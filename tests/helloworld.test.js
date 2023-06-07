//pull the 
const helloWorldFunction = require("../src/helloWorld");

describe(`GIVEN we coded the helloWorld function`, () => {
  describe("WHEN invoking the function", () => {
    it(`THEN it should return 'hello world'`, () => {
      const person = helloWorldFunction();
      expect(person.age).toBe(24);
    });
  });
});
