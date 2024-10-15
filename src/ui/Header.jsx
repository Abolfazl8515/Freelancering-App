import UserAvatar from "../features/auth/userAvatar";
import useUser from "../hooks/useUser";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-4
      ${isLoading && "blur-sm opacity-50"}
      `}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
