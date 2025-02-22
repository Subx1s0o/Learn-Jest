import { toLowerCase, toUpperCase } from "../src/utils";

describe("utils with AAA", () => {
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
