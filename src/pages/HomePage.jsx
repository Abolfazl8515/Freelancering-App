import { Link } from "react-router-dom";
import Header from "../ui/Header";
import useAuthorize from "../features/auth/useAuthorize";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const roles = {
  FREELANCER: { path: "freelancer" },
  ADMIN: { path: "admin" },
  OWNER: { path: "owner" },
};

const HomePage = () => {
  const { isVeryfied, isAuthenticated, user } = useAuthorize();
  const [userPath, setUserPath] = useState("");

  useEffect(() => {
    if (isVeryfied && isAuthenticated) setUserPath(roles[user.role].path);
    else if (isAuthenticated && !isVeryfied) {
      toast.error("پروفایل شما هنوز تایید نشده");
      setUserPath("/");
    } else {
      setUserPath("auth");
    }
  }, [user]);

  return (
    <div className="container xl:max-w-screen-xl">
      <Header />
      <div className="flex items-center justify-around py-16">
        <div className="w-1/3">
          <h1 className="text-secondary-700 font-extrabold text-5xl">
            با کارینو پروژه بگیر یا پروژه خودتو ثبت کن
          </h1>
          <button className="text-white px-10 py-5 bg-primary-700 mt-3 rounded-3xl text-xl font-bold hover:bg-primary-500 transition-all duration-200">
            <Link to={userPath}>بزن بریم</Link>
          </button>
        </div>
        <div>
          <img
            src="/freelancer.webp"
            alt="landing image"
            className="w-80 h-80 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
