import { getStringInfo } from "../src/utils";

describe("utils with assertions", () => {
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
