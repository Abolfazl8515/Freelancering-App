import { RxHamburgerMenu } from "react-icons/rx";
import UserAvatar from "../features/auth/userAvatar";
import HeaderMenu from "./HeaderMenu";
import useUser from "../hooks/useUser";
import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const MobileHeader = ({ children, isShowMobileMenu, setIsShowMobileMenu }) => {
  const { isLoading } = useUser();
  const backdropRef = useRef();
  const ref = useOutsideClick(() => {
    if (isShowMobileMenu) toggleMenu();
  });

  const toggleMenu = () => {
    const menu = ref.current;
    const backDrop = backdropRef.current;

    if (isShowMobileMenu) {
      menu.style.width = "75%";
      setTimeout(() => {
        menu.style.width = "0";
        menu.style.opacity = "0";
      }, 5);

      setTimeout(() => {
        menu.classList.add("hidden");
        backDrop.classList.add("hidden");
      }, 300);
    } else {
      menu.classList.remove("hidden");
      backDrop.classList.remove("hidden");
      menu.style.width = "0";
      setTimeout(() => {
        menu.style.width = "75%";
        menu.style.opacity = "1";
      }, 5);
    }

    setIsShowMobileMenu((prev) => !prev);
  };

  const closeMenuHandler = (e) => {
    const element = e.target;
    const isLink =
      element.tagName === "A" ||
      element.parentElement.tagName === "A" ||
      element.parentElement.parentElement.tagName === "A";

    if (isLink) toggleMenu();
  };

  return (
    <header className="bg-secondary-0 py-4 px-4 sticky top-0 z-20 backdrop-blur-3xl bg-opacity-25 shadow-md shadow-secondary-200">
      <div
        className={`xl:max-w-screen-xl mt-2 flex items-start justify-between
      ${isLoading && "blur-sm opacity-50"}
      `}
      >
        <div
          ref={backdropRef}
          className={`backdrop-blur-sm fixed hidden top-0 left-0
           w-full h-screen bg-secondary-800 bg-opacity-30 z-50`}
        >
          <div
            ref={ref}
            onClick={closeMenuHandler}
            className={`w-3/4 h-screen fixed hidden top-0 right-0
        rounded-lg bg-secondary-0 p-4 shadow-lg overflow-hidden animate-open-menu transition-all duration-300 ease-in-out`}
          >
            <div className="w-full flex items-center justify-between p-2">
              <h3 className="text-base text-secondary-700">
                <Link to="/" className="text-2xl font-bold text-secondary-700">
                  کارینو😎
                </Link>
              </h3>
              <button onClick={() => toggleMenu()}>
                <FaTimes className="w-5 h-5 text-secondary-600" />
              </button>
            </div>
            {children}
          </div>
        </div>
        <RxHamburgerMenu
          className="w-5 h-5 text-secondary-700 cursor-pointer"
          onClick={() => toggleMenu()}
        />
        <div className="flex items-center gap-x-4">
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
