import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi2";
interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <>
      <header className="flex justify-between px-16 pt-5">
        <div>
          <h1 className="font-bsd text-5xl  text-purple1">
            Caio Vitor Goulart
          </h1>
          <h3 className="text-purple1 text-[25.5px]">
            Desenvolvedor Frond-end
          </h3>
        </div>
        <div className="flex gap-10 items-center text-purple1">
          <ul className="flex gap-10">
            <li>
              <NavLink to={"/"}>Sobre</NavLink>
            </li>
            <li>
              <NavLink to={"portfolio"}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to={"contacts"}>Contatos</NavLink>
            </li>
          </ul>
          <HiOutlineSun className=" cursor-pointer" size="2.625rem" />
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
