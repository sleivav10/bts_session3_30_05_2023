const helloWorldFunction = require("../function/helloWorld");

describe(`GIVEN we coded the helloWorld function`, () => {
  describe("WHEN invoking the function", () => {
    it(`THEN it should return 'hello world'`, () => {
      const response = helloWorldFunction();
      expect(response).toBe("hello world");
    });
  });
});
