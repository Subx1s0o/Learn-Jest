import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/4.doubles";
const baseTestDir = "<rootDir>/src/4.doubles/test";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.test.ts`],
} as Config.InitialOptions;
