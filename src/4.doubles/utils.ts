type StringCaseObject = {
  lowercase: string;
  uppercase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringInfo: StringCaseObject) {
  return stringInfo.extraInfo
    ? Object.keys(stringInfo.extraInfo).length * stringInfo.length
    : 0;
}

export function toUpperCaseWithCb(
  arg: string,
  callback: (str: string) => void
) {
  if (!arg) {
    callback("Invalid Argument");
    return;
  }
  callback(`called with function ${arg}`);

  return arg.toUpperCase();
}
