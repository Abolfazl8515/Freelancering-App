import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/auth/useAuthorize";
import { useEffect } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAuthorized, isLoading, isVeryfied } =
    useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
    if (!isVeryfied && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده");
      navigate("/");
    }
  }, [navigate, isAuthenticated, isAuthorized, isLoading, isVeryfied]);

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoute;
