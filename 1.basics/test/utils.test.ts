import { getStringInfo, toUpperCase } from "../src/utils";

describe("utils", () => {
  describe("toUpperCase", () => {
    it("should convert string to uppercase", () => {
      //arrangement
      const sut = toUpperCase;
      const expected = "HELLO";

      //action
      const actual = sut("hello");

      //assertion
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo", () => {
    it("should return info for valid string", () => {
      const actual = getStringInfo("hello");
      const expected = {
        lowercase: "hello",
        uppercase: "HELLO",
        capitalcase: "Hello",
      };

      expect(actual).toEqual(expected);
      expect(actual.uppercase).toHaveLength(5);

      expect(actual.lowercase).toContain("l");
    });
  });
});
