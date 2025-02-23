import { PasswordChecker } from "../PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker | null = null;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  afterEach(() => {
    sut = null;
  });

  it("password with less than 8 characters is invalid", () => {
    const actual = sut!.checkPassword("1234567");
    const expected = false;

    expect(actual).toBe(expected);
  });

  it("password with more than 8 characters is ok", () => {
    const actual = sut!.checkPassword("12345678Aa");
    const expected = true;

    expect(actual).toBe(expected);
  });

  it("password with no upper case letter is invalid", () => {
    const actual = sut!.checkPassword("12345abcd");
    const expected = false;

    expect(actual).toBe(expected);
  });

  it("password with upper case letter is valid", () => {
    const actual = sut!.checkPassword("12345abcdA");
    const expected = true;

    expect(actual).toBe(expected);
  });

  it("password with no lower case letter is invalid", () => {
    const actual = sut!.checkPassword("12345AAAA");
    const expected = false;

    expect(actual).toBe(expected);
  });

  it("password with lower case letter is valid", () => {
    const actual = sut!.checkPassword("12345abcdA");
    const expected = true;

    expect(actual).toBe(expected);
  });
});
