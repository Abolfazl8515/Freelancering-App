import { FaUserCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logout from "../features/auth/Logout";
import ToggleDarkMode from "./ToggleDarkMode";
import useAuthorize from "../features/auth/useAuthorize";

const roles = {
  FREELANCER: { path: "freelancer" },
  ADMIN: { path: "admin" },
  OWNER: { path: "owner" },
};

const HeaderMenu = () => {
  const { user } = useAuthorize();
  return (
    <ul className="flex items-center gap-x-4">
      {user && (
        <li className="cursor-pointer text-secondary-700 hover:text-secondary-600">
          <Link to={`/${roles[user.role].path}`}>
            <FaUserCog className="w-5 h-5" />
          </Link>
        </li>
      )}

      <ToggleDarkMode />

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
