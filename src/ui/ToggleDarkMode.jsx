import { MdLightMode, MdModeNight } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeProvider";

const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <li
      onClick={toggleDarkMode}
      className={`cursor-pointer w-10 h-5 ${
        !isDarkMode ? "bg-secondary-300" : "bg-primary-900"
      } flex items-center px-1 rounded-lg`}
    >
      <div
        className={`transition-all duration-500 ${
          !isDarkMode && "-translate-x-4"
        }`}
      >
        {!isDarkMode ? (
          <MdLightMode className="text-secondary-100" />
        ) : (
          <MdModeNight className="text-secondary-0" />
        )}
      </div>
    </li>
  );
};

export default ToggleDarkMode;
