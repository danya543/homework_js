declare module 'str-utils' {
  type Stringtype = (input: string) => string;

  export const stringReverse: Stringtype;
  export const stringToLower: Stringtype;
  export const stringToUpper: Stringtype;
  export const stringRandomize: Stringtype;
  export const stringInvertCase: Stringtype;
}
