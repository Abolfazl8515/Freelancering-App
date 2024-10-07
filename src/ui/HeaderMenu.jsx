import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { Link } from "react-router-dom";
import Logout from "../features/auth/Logout";
import useUser from "../features/auth/useUser";
import ToggleDarkMode from "./ToggleDarkMode";

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
    
        <ToggleDarkMode/>
  
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
