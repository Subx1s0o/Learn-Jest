export function toUpperCase(str: string) {
  return str.toUpperCase();
}

export function toLowerCase(str: string) {
  return str.toLowerCase();
}

/////////////////////////////////////////////

export type StringCaseType = "lowercase" | "uppercase" | "capitalcase";

export interface StringCaseObject {
  [key: string]: string;
}

export function getStringInfo(str: string): StringCaseObject {
  return {
    lowercase: toLowerCase(str),
    uppercase: toUpperCase(str),
    capitalcase: str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    ),
  };
}
