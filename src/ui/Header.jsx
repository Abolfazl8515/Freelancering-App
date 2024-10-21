import { Link, NavLink } from "react-router-dom";
import UserAvatar from "../features/auth/userAvatar";
import useUser from "../hooks/useUser";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import CustomNavLink from "../ui/CustomNavLink";
import MobileHeader from "./MobileHeader";
import useDevice from "../hooks/useDevice";

const roles = {
  FREELANCER: { path: "freelancer" },
  ADMIN: { path: "admin" },
  OWNER: { path: "owner" },
};

const Header = () => {
  const { isLoading, user } = useUser();
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const { isMobileDevice } = useDevice("(max-width: 768px)");

  if (isMobileDevice)
    return (
      <MobileHeader
        isShowMobileMenu={isShowMobileMenu}
        setIsShowMobileMenu={setIsShowMobileMenu}
      >
        <ul className="flex mt-5 gap-y-5 justify-center flex-col gap-x-4">
          <CustomNavLink
            to="/"
            className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
          >
            صفحه اصلی
          </CustomNavLink>
          <CustomNavLink
            to="/aboutUs"
            className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
          >
            درباره ما
          </CustomNavLink>
          <CustomNavLink
            to="/contactUs"
            className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
          >
            تماس با ما
          </CustomNavLink>
          <CustomNavLink
            to={`/${roles[user.role].path}`}
            className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
          >
            ورود به پنل کاربری
          </CustomNavLink>
        </ul>
      </MobileHeader>
    );

  return (
    <header className="bg-secondary-0 py-4 px-8 sticky top-0 z-20 backdrop-blur-3xl bg-opacity-25 shadow-md shadow-secondary-200">
      <div
        className={`xl:max-w-screen-xl mt-2 flex items-center justify-around
      ${isLoading && "blur-sm opacity-50"}
      `}
      >
        <ul className="flex items-center justify-center gap-x-4">
          <li>
            <Link to="/" className="text-2xl font-bold text-secondary-700">
              کارینو😎
            </Link>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-primary-900 text-lg transition-all duration-300 rounded-lg"
                  : "p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-primary-900 text-lg transition-all duration-300 rounded-lg"
                  : "p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
              }
            >
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-primary-900 text-lg transition-all duration-300 rounded-lg"
                  : "p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
              }
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-x-4">
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
