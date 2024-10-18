import { Link, useNavigate } from "react-router-dom";
import UserAvatar from "../features/auth/userAvatar";
import useUser from "../hooks/useUser";
import HeaderMenu from "./HeaderMenu";
import { useEffect } from "react";

const Header = () => {
  const { isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const header = document.querySelector("header");
    const linkElements = header.querySelectorAll("a");
    linkElements.forEach((item) => {
      if (item.href.includes("#")) {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          navigate(`/${e.target.href.split("/").at(-1)}`);
          window.scrollTo({ top: document.documentElement.scrollHeight });
        });
      }
    });
  }, []);

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
            <Link
              to="/"
              className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
            >
              صفحه اصلی
            </Link>
          </li>
          <li>
            <a
              href="/#aboutUs"
              className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
            >
              درباره ما
            </a>
          </li>
          <li>
            <a
              href="/#contactUs"
              className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg"
            >
              تماس با ما
            </a>
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
