import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 31px 75px;
  color: ${(props) => props.theme.colors.primary};
  width: 100vw;
  height: 115px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Logo = styled.div`
  h3 {
    font-weight: 300;
  }
`;
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  a {
    font-family: inherit;
    font-size: 20px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
  svg {
    font-size: 42px;
    cursor: pointer;
  }
`;
