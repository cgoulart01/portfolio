"use client";
import * as S from "./Header.style";
import { Big_Shoulders_Display } from "next/font/google";
import { BsSun } from "react-icons/bs";
import Link from "next/link";
const bigShouldersDisplay = Big_Shoulders_Display({
  weight: "800",
  subsets: ["latin"],
});

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <h1 style={bigShouldersDisplay.style}>Caio Vitor Goulart</h1>
        <h3>Desenvolvedor Front-end</h3>
      </S.Logo>
      <S.Nav>
        <S.Menu>
          <li>
            <Link href="#">Sobre</Link>
          </li>
          <li>
            <Link href="#">Portfolio</Link>
          </li>
          <li>
            {" "}
            <Link href="#">Contatos</Link>
          </li>
        </S.Menu>
        <BsSun />
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
