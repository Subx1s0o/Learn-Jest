import { Utils } from "../utils";

describe("utils", () => {
  describe("toUpperCase", () => {
    let sut: Utils | null = null;

    beforeEach(() => {
      sut = new Utils();
    });

    afterEach(() => {
      sut = null;
    });

    it("should convert string to uppercase", () => {
      const expected = "HELLO";
      const actual = sut!.toUpperCase("hello");

      expect(actual).toBe(expected);
    });

    it("should throw error for invalid - arrow function", () => {
      expect(() => sut!.toUpperCase("")).toThrow();
    });

    it("should throw error for invalid - try catch", (done) => {
      try {
        sut!.toUpperCase("");
        done(new Error("Invalid String"));
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid String");
        done();
      }
    });
  });
});
