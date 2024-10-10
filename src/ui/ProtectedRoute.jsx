import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/auth/useAuthorize";
import { useEffect } from "react";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [navigate, isAuthenticated, isAuthorized, isLoading]);

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoute;
