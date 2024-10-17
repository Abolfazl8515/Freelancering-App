import { Link } from "react-router-dom";
import Header from "../ui/Header";
import useAuthorize from "../features/auth/useAuthorize";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { MdDeveloperMode } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
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
        <AboutUs isDarkMode={isDarkMode} />
        <ContactUs />
      </div>
    </>
  );
};

export default HomePage;

const Landing = ({ userPath }) => {
  return (
    <div className="flex items-center justify-around py-16">
      <div className="w-1/3">
        <h1 className="text-secondary-700 font-black text-5xl">
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
    <div className="w-3/4 text-center space-y-10 mx-auto">
      <div className={`relative`}>
        <h3
          className={`w-full font-black -translate-x-1/2 left-1/2 ${
            isDarkMode && "border-b-2 border-primary-200 mb-8"
          } text-secondary-700 absolute -bottom-1 text-2xl`}
        >
          چه کارهایی میتوانید در کارینو انجام دهید؟
        </h3>
        <span
          className={`w-full max-w-[400px] h-3 ${
            isDarkMode ? "hidden" : "flex"
          } justify-center mx-auto rounded-xl bg-primary-200`}
        ></span>
      </div>
      <div className={`flex justify-evenly items-start`}>
        <div className="p-5 border border-secondary-200 rounded-xl flex items-center justify-center flex-col group">
          <MdDeveloperMode className="size-7 mb-3 text-secondary-500" />
          <h4 className="text-secondary-700">توسعه نرم افزار و آی تی</h4>
        </div>
        <div className="p-5 border border-secondary-200 rounded-xl flex items-center justify-center flex-col">
          <MdDeveloperMode className="size-7 mb-3 text-secondary-500" />
          <h4 className="text-secondary-700">تولید محتوا و ترجمه</h4>
        </div>
        <div className="p-5 border border-secondary-200 rounded-xl flex items-center justify-center flex-col">
          <MdDeveloperMode className="size-7 mb-3 text-secondary-500" />
          <h4 className="text-secondary-700">طراحی و خلاقیت</h4>
        </div>
        <div className="p-5 border border-secondary-200 rounded-xl flex items-center justify-center flex-col">
          <MdDeveloperMode className="size-7 mb-3 text-secondary-500" />
          <h4 className="text-secondary-700">مهندسی و معماری</h4>
        </div>
      </div>
    </div>
  );
};

const AboutUs = ({ isDarkMode }) => {
  return (
    <div className="text-center space-y-10 mt-20" id="aboutUs">
      <div className="relative">
        <h3
          className={`w-full font-black -translate-x-1/2 left-1/2 ${
            isDarkMode && "max-w-[200px] border-b-2 border-primary-200 mb-4"
          } text-secondary-700 absolute -bottom-1 text-2xl`}
        >
          درباره ما
        </h3>
        <span
          className={`w-full max-w-[200px] h-3 justify-center mx-auto ${
            isDarkMode ? "hidden" : "flex"
          } rounded-xl bg-primary-200`}
        ></span>
      </div>
      <div className="space-y-10">
        <p className="text-secondary-700 text-justify mx-auto max-w-[800px]">
          سایت فریلنسری کارینو به عنوان یک پلتفرم حرفه‌ای، با هدف ایجاد ارتباط
          مستقیم بین کارفرمایان و فریلنسرها طراحی شده است. در کارینو، کارفرمایان
          می‌توانند پروژه‌های خود را به سادگی تعریف کرده و با انتخاب از بین طیف
          گسترده‌ای از فریلنسرهای متخصص در زمینه‌های مختلف، از برنامه‌نویسی و
          طراحی گرافیک تا نویسندگی و ترجمه، به بهترین نتیجه دست یابند
        </p>
        <p className="text-secondary-700 text-justify mx-auto max-w-[800px]">
          کارینو بستری امن و کاربرپسند فراهم کرده است تا فریلنسرها بتوانند از
          مهارت‌های خود کسب درآمد کنند، در حالی که کارفرمایان به خدمات با کیفیت
          دسترسی دارند. سیستم ارزیابی و نظرات کاربران در این سایت، شفافیت و
          اعتماد متقابل را تضمین می‌کند. هدف ما در کارینو، تسهیل فرایند همکاری
          آنلاین و کمک به رشد و توسعه کسب‌و‌کارها و فریلنسرهاست.
        </p>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div
      className="w-2/3 mx-auto mt-10 flex items-center justify-around p-4 rounded-t-xl border border-secondary-200"
      id="contactUs"
    >
      <div>
        <h4 className="text-secondary-700 text-2xl">تماس با ما</h4>
      </div>
      <div className="w-1/2 flex items-center justify-center gap-x-5">
        <a
          href="mailto:boorbooryabolfazl85@gmail.com"
          className="group p-3 border border-secondary-200 hover:border-primary-400 hover:text-primary-700 rounded-2xl flex items-center"
        >
          <span className="invisible inline-block text-[0] group-hover:text-base group-hover:visible transition-all duration-300">
            پیج اینستا کارینو
          </span>
          <span>
            <FaInstagram className="w-10 h-10 text-secondary-700 group-hover:text-primary-700" />
          </span>
        </a>
        <a
          href="mailto:boorbooryabolfazl85@gmail.com"
          className="group p-3 border border-secondary-200 hover:border-primary-400 hover:text-primary-700 rounded-2xl flex items-center"
        >
          <span className="invisible inline-block text-[0] group-hover:text-base group-hover:visible transition-all duration-300">
            ایمیل پشتیبانی
          </span>
          <span>
            <BiLogoGmail className="w-10 h-10 text-secondary-700 group-hover:text-primary-700" />
          </span>
        </a>
      </div>
    </div>
  );
};
