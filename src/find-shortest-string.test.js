// import function from local file
const findShortestString = require("./find-shortest");

test("findShortestString finds the Shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("day");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint Shortest strings", () => {
  expect(findShortestString(["brave", "can"])).toBe("brave");
  expect(findShortestString(["can", "brave"])).toBe("can");
  expect(findShortestString(["toilet", "dancer", "canopy"])).toBe("toilet");
});
