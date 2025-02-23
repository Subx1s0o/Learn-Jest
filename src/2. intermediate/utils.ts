export class Utils {
  toUpperCase(str: string) {
    if (!str) {
      throw new Error("Invalid String");
    }

    return str.toUpperCase();
  }
}
