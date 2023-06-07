//pull the 
const numbersFunction = require("../src/processNumbers");

describe(`GIVEN we coded the processNumbers function`, () => {
  describe("WHEN invoking the function", () => {
    it(`THEN it should return 'processNumbers'`, () => {
      const maximo = numbersFunction();
      const sum = numbersFunction();
      expect(maximo.maximo).toBe(802);
      expect(sum.sum).toBe(1058);
    });
  });
});