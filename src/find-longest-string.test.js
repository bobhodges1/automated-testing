// import function from local file
const findLongestString = require("./find-longest-string");

test("findLongestString finds the longest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findLongestString(["brave", "can"])).toBe("brave");
  expect(findLongestString(["can", "brave"])).toBe("brave");
  expect(findLongestString(["toilet", "dancer", "canopy"])).toBe("toilet");
});
