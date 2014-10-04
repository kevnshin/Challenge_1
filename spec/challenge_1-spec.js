var challenge_1 = require("../challenge_1");
 
describe("Sum of a Multiple", function () {
  
  it("should return '23' for n=10", function () {
    var sum = challenge_1.sumOfAMultiple(10);
    expect(sum).toBe(23);
  });

  it("should return '2318' for n=100", function () {
    var sum = challenge_1.sumOfAMultiple(100);
    expect(sum).toBe(2318);
  });

  // when your tests pass, uncomment the next two and
  // change the expected value to your calculated result
  
 it("should return '233168' for n=1000 (see challenge_1-spec.js)", function () {
    var sum = challenge_1.sumOfAMultiple(1000);
    expect(sum).toBe(233168);
  });

  it("should return '23331668' for n=10000 (see challenge_1-spec.js)", function () {
    var sum = challenge_1.sumOfAMultiple(10000);
    expect(sum).toBe(23331668); // you change this value to the correct sum!
  });
  
  
});    