<<<<<<< HEAD:tests/helloworld.test.js
//pull the 
const helloWorldFunction = require("../src/helloWorld");
=======
const helloWorldFunction = require("../src/helloWorld.js");
>>>>>>> ad8b99f12edeb71b6ff4db5f8cf2ad2e5420dd6d:tests/test.js

describe("GIVEN we coded the helloWorld function", () => {
  describe("WHEN invoking the function", () => {
<<<<<<< HEAD:tests/helloworld.test.js
    it(`THEN it should return 'hello world'`, () => {
=======
    it("THEN it should return a person with age=24", () => {
>>>>>>> ad8b99f12edeb71b6ff4db5f8cf2ad2e5420dd6d:tests/test.js
      const person = helloWorldFunction();
      expect(person.age).toBe(24);
    });
  });
});
