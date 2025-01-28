import Icon from "./Icon";
import { useTheme } from "./Context/theme/use-theme";

const ThemeChangeBtn = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        if (theme === "dark") {
          setTheme('light')
          document.querySelector("body").classList.remove("dark");
          document.querySelector("body").classList.add('light')
        } else {
          setTheme('dark')
          document.querySelector("body").classList.add('dark')
          document.querySelector("body").classList.remove("light");
        }
      }}
      className="btn-variant-outline"
    >
      <Icon
        src={
          theme === "dark"
            ? "/icons8-sol-50.png"
            : "/icons8-no-molestar-2-50.png"
        }
        width={32}
        height={32}
      />
    </button>
  );
};

export default ThemeChangeBtn;
