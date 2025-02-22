import { toLowerCase, toUpperCase } from "../src/utils";

describe("utils", () => {
  it("should convert string to uppercase", () => {
    const result = toUpperCase("hello");
    expect(result).toBe("HELLO");
  });

  it("should convert string to lowercase", () => {
    const result = toLowerCase("HELLO");
    expect(result).toBe("hello");
  });
});
