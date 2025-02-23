import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/3.PasswordChecker";
const baseTestDir = "<rootDir>/src/3.PasswordChecker/test";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.test.ts`],
} as Config.InitialOptions;
