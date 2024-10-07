import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { Link } from "react-router-dom";
import Logout from "../features/auth/Logout";
import useUser from "../features/auth/useUser";

const HeaderMenu = () => {
  const [theme, setTheme] = useState(true);
  const { user } = useUser();
  return (
    <ul className="flex items-center gap-x-4">
      <li className="cursor-pointer text-secondary-700 hover:text-secondary-600">
        <Link>
          <FaUserCog className="w-5 h-5" />
        </Link>
      </li>
      <li
        onClick={() => setTheme((prev) => !prev)}
        className={`cursor-pointer w-10 h-5 ${
          theme ? "bg-secondary-300" : "bg-primary-900"
        } flex items-center px-1 rounded-lg`}
      >
        <div
          className={`transition-all duration-500 ${theme && "-translate-x-4"}`}
        >
          {theme ? (
            <MdLightMode className="text-secondary-100" />
          ) : (
            <MdModeNight className="text-secondary-0" />
          )}
        </div>
      </li>
      <li>
        {user ? (
          <Logout />
        ) : (
          <Link to="/auth" className="text-secondary-700">
            ورود | ثبت نام
          </Link>
        )}
      </li>
    </ul>
  );
};

export default HeaderMenu;
