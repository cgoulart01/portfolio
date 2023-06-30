import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi2";
import { BiSolidMoon } from "react-icons/bi";
import { useState } from "react";
import About from "../About/About";
import { useMenuContext } from "../../context/MenuContext";
import { RouteTypes } from "../../types/routeTypes";
import { ThemeTypes } from "../../types/themeTypes";
interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { route, setRoute, theme, setTheme } = useMenuContext();
  const [outlet, setOutlet] = useState(true);

  return (
    <>
      <header className="bg-[#eee] flex justify-between px-16 pt-5 dark:bg-purple1 dark:text-[#eee] text-purple1">
        <div>
          <h1 className="font-bsd text-5xl ">Caio Vitor Goulart</h1>
          <h3 className=" text-[25.5px]">Desenvolvedor Frond-end</h3>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-10">
            <li
              onClick={() => {
                setOutlet(true);
                setRoute(RouteTypes.about);
              }}
            >
              <NavLink to={"/"}>Sobre</NavLink>
              <div
                className={
                  route === RouteTypes.about
                    ? "bg-purple1 h-1 rounded dark:bg-[#eee]"
                    : ""
                }
              />
            </li>

            <li
              onClick={() => {
                setOutlet(false);
                setRoute(RouteTypes.portfolio);
              }}
            >
              <NavLink to={"portfolio"}>Portfolio</NavLink>
              <div
                className={
                  route === RouteTypes.portfolio
                    ? "bg-purple1 h-1 rounded dark:bg-[#eee]"
                    : ""
                }
              />
            </li>
            <li
              onClick={() => {
                setOutlet(false);
                setRoute(RouteTypes.contacts);
              }}
            >
              <NavLink to={"contacts"}>Contatos</NavLink>
              <div
                className={
                  route === RouteTypes.contacts
                    ? "bg-purple1 h-1 rounded dark:bg-[#eee]"
                    : ""
                }
              />
            </li>
          </ul>
          {theme === ThemeTypes.light ? (
            <BiSolidMoon
              onClick={() => setTheme(ThemeTypes.dark)}
              className=" cursor-pointer"
              size="2rem"
            />
          ) : (
            <HiOutlineSun
              onClick={() => setTheme(ThemeTypes.light)}
              className=" cursor-pointer"
              size="2rem"
            />
          )}
        </div>
      </header>
      <div className="h-[100vh] bg-[#eee] dark:bg-purple1">
        {outlet && <About />}
        <Outlet />
      </div>
    </>
  );
};

export default Header;
