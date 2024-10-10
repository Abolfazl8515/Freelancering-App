import { useLocation } from "react-router-dom";
import useUser from "./useUser";

const useAuthorize = () => {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();
  let isAuthenticated = false;
  let isAuthorized = false;

  const Roles = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  if (user) isAuthenticated = true;

  const desiredRole = pathname.split("/").at(1);

  if (user && desiredRole) {
    if (user.role === Roles[desiredRole]) isAuthorized = true;
  }

  return { user, isAuthenticated, isAuthorized, isLoading };
};

export default useAuthorize;
