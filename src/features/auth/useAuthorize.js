import { useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";

const useAuthorize = () => {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();
  let isAuthenticated = false;
  let isAuthorized = false;
  let isVeryfied = false;

  const Roles = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  if (user && user.status === 2) isVeryfied = true;

  if (user) isAuthenticated = true;

  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(Roles).includes(desiredRole)) {
    if (user && user.role === Roles[desiredRole]) isAuthorized = true;
  }

  return { user, isAuthenticated, isAuthorized, isLoading, isVeryfied };
};

export default useAuthorize;
