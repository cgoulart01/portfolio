import "styled-components";

declare module "styled-compontents" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      input: string;
      textWhite: string;
    };
  }
}
