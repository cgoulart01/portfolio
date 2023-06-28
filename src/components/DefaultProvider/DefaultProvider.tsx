import { ReactNode } from "react";
import * as S from "./DefaultProvider.style";
import * as T from "../../styles/themes/themes";
import { ThemeProvider } from "styled-components";

interface DefaultProviderProps {
  children: ReactNode;
}
const theme = {};
const DefaultProvider = ({ children }: DefaultProviderProps) => {
  return <ThemeProvider theme={T.light}>{children}</ThemeProvider>;
};

export default DefaultProvider;
