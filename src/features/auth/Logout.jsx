import { BiLogOut } from "react-icons/bi";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

const Logout = () => {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loading />
  ) : (
    <div
      className="text-secondary-700 hover:text-error cursor-pointer"
      onClick={logout}
    >
      <BiLogOut className="w-5 h-5" />
    </div>
  );
};

export default Logout;
