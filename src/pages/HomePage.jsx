import { Link } from "react-router-dom";
import Header from "../ui/Header";
import useAuthorize from "../features/auth/useAuthorize";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { MdDeveloperMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeProvider";

const roles = {
  FREELANCER: { path: "freelancer" },
  ADMIN: { path: "admin" },
  OWNER: { path: "owner" },
};

const HomePage = () => {
  const { isVeryfied, isAuthenticated, user } = useAuthorize();
  const [userPath, setUserPath] = useState("");
  const { isDarkMode } = useDarkMode();

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
    <>
      <div className="sticky top-0 mx-auto max-w-7xl z-20">
        <Header />
      </div>
      <div className="container xl:max-w-screen-xl">
        <Landing userPath={userPath} />
        <Advanteges isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default HomePage;

const Landing = ({ userPath }) => {
  return (
    <div className="flex items-center flex-col-reverse md:flex-row md:justify-around py-16">
      <div className="w-2/3 md:w-1/3 md:mt-0 mt-5 mx-auto md:mx-0 md:text-justify text-center">
        <h1 className="text-secondary-700 md:font-black font-extrabold text-3xl md:text-5xl">
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
  );
};

const Advanteges = ({ isDarkMode }) => {
  return (
    <div className="md:w-3/4 w-full text-center space-y-10 mx-auto">
      <div className="relative">
        <h3
          className={`w-full md:font-black font-extrabold -translate-x-1/2 left-1/2 ${
            isDarkMode && "border-b-2 border-primary-200 mb-8"
          } text-secondary-700 absolute -bottom-1 text-lg md:text-2xl`}
        >
          چه کارهایی میتوانید در کارینو انجام دهید؟
        </h3>
        <span
          className={`w-full max-w-[400px] h-3 ${
            isDarkMode ? "hidden" : "flex"
          } justify-center mx-auto rounded-xl bg-primary-200`}
        ></span>
      </div>
      <div className={`flex flex-col md:flex-row md:justify-evenly items-center md:items-start`}>
        <div className="min-w-10 w-4/5 p-5 border border-secondary-200 rounded-xl flex items-center justify-center flex-col group">
          <MdDeveloperMode className="size-7 mb-3 text-secondary-500" />
          <h4 className="text-secondary-700">توسعه نرم افزار و آی تی</h4>
        </div>
        <div className="min-w-10 w-4/5 p-5 border border-secondary-200 rounded-xl flex items-center justify-center flex-col">
          <MdDeveloperMode className="size-7 mb-3 text-secondary-500" />
          <h4 className="text-secondary-700">تولید محتوا و ترجمه</h4>
        </div>
        <div className="min-w-10 w-4/5 p-5 border border-secondary-200 rounded-xl flex items-center justify-center flex-col">
          <MdDeveloperMode className="size-7 mb-3 text-secondary-500" />
          <h4 className="text-secondary-700">طراحی و خلاقیت</h4>
        </div>
        <div className="min-w-10 w-4/5 p-5 border border-secondary-200 rounded-xl flex items-center justify-center flex-col">
          <MdDeveloperMode className="size-7 mb-3 text-secondary-500" />
          <h4 className="text-secondary-700">مهندسی و معماری</h4>
        </div>
      </div>
    </div>
  );
};
