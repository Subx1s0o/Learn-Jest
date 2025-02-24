import { calculateComplexity, toUpperCaseWithCb } from "../utils";

describe("utils", () => {
  describe("calculateComplexity", () => {
    it("should calculate complexity for valid string", () => {
      const actual = calculateComplexity({
        length: 5,
        extraInfo: {
          a: "some info",
          b: "some info",
        },
        lowercase: "",
        uppercase: "",
        characters: [],
      });
      const expected = 10;

      expect(actual).toBe(expected);
    });

    it("should calculate complexity for invalid string", () => {
      const actual = calculateComplexity({
        length: 5,
        extraInfo: {},
        lowercase: "",
        uppercase: "",
        characters: [],
      });
      const expected = 0;

      expect(actual).toBe(expected);
    });
  });

  describe("describe ToUpperCaseWithCb", () => {
    let cbArgs: string[] = [];
    let timesCalled = 0;
    function callbackMock(arg: string) {
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      cbArgs = [];
      timesCalled = 0;
    });

    it("calls for invalid argument - callback mock", () => {
      const actual = toUpperCaseWithCb("", callbackMock);
      expect(cbArgs).toContain("Invalid Argument");
      expect(timesCalled).toBe(1);
    });

    it("calls for valid argument", () => {
      const actual = toUpperCaseWithCb("abc", callbackMock);
      expect(actual).toBe("ABC");
      expect(cbArgs).toContain("called with function abc");
      expect(timesCalled).toBe(1);
    });
  });
});
