import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { RouteTypes } from "../types/routeTypes";
import { ThemeTypes } from "../types/themeTypes";

const MenuContext = createContext<{
  route: RouteTypes;
  setRoute(route: RouteTypes): void;
  theme: ThemeTypes;
  setTheme(theme: ThemeTypes): void;
}>({
  route: RouteTypes.about,
  theme: ThemeTypes.light,
  setRoute: () => {},
  setTheme: () => {},
});

interface MenuContextProviderProps {
  children: ReactNode;
}

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
  children,
}: MenuContextProviderProps) => {
  const [route, setRoute] = useState(RouteTypes.about);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark"
      ? ThemeTypes.light
      : ThemeTypes.dark
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const handleTheme = theme === ThemeTypes.dark ? "light" : "dark";
    const themeString = theme === ThemeTypes.light ? "light" : "dark";
    root.classList.remove(handleTheme);
    root.classList.add(themeString);
    localStorage.setItem("theme", themeString);
  }, [theme]);

  return (
    <>
      <MenuContext.Provider value={{ route, setRoute, theme, setTheme }}>
        {children}
      </MenuContext.Provider>
    </>
  );
};

export const useMenuContext = () => useContext(MenuContext);
