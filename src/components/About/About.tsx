import { useMenuContext } from "../../context/MenuContext";
import { ThemeTypes } from "../../types/themeTypes";

interface AboutProps {}

const About = ({}: AboutProps) => {
  const { theme } = useMenuContext();
  return (
    <div className="flex items-center justify-between pt-[113px] px-[134px]">
      <p className="w-[355px] h-[150px] font-semibold text-[16px] text-purple1 dark:text-white1 pointer-events-none">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries.
      </p>
      <img
        className="h-[300px]"
        src={`/${theme === ThemeTypes.light ? "light" : "dark"}.svg`}
      />
    </div>
  );
};

export default About;
