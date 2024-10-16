import { Link } from "react-router-dom";
import UserAvatar from "../features/auth/userAvatar";
import useUser from "../hooks/useUser";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { isLoading } = useUser();

  return (
    <header className="bg-secondary-0 py-4 px-8 sticky top-0">
      <div
        className={`container xl:max-w-screen-lg mt-2 flex items-center justify-around
      ${isLoading && "blur-sm opacity-50"}
      `}
      >
        <ul className="flex items-center justify-center gap-x-4">
          <li>
            <Link to="/" className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/" className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg">درباره ما</Link>
          </li>
          <li>
            <Link to="/" className="p-2 hover:text-primary-900 text-secondary-800 text-lg transition-all duration-300 rounded-lg">تماس با ما</Link>
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
