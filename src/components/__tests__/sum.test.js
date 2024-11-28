import { sum } from "../sum";

test("should return 7 whe 4,3 are passed as arguments", async function () {
  expect(sum(4, 3)).toBe(7);
});
