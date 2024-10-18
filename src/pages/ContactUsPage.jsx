import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import Header from "../ui/Header";

const ContactUsPage = () => {
  return (
    <>
      <div className="sticky top-0 mx-auto max-w-7xl z-20">
        <Header />
      </div>
      <div
        className="w-2/3 mx-auto mt-10 flex flex-col md:flex-row items-center md:justify-around p-4 rounded-t-xl border border-secondary-200"
        id="contactUs"
      >
        <div>
          <h4 className="text-secondary-700 text-2xl">تماس با ما</h4>
        </div>
        <div className="w-1/2 md:gap-y-0 gap-y-3 flex md:flex-row flex-col items-center justify-center gap-x-5">
          <a
            href="mailto:boorbooryabolfazl85@gmail.com"
            className="group p-1 md:p-3 border border-secondary-200 hover:border-primary-400 hover:text-primary-700 rounded-2xl flex items-center"
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
            className="group p-1 md:p-3 border border-secondary-200 hover:border-primary-400 hover:text-primary-700 rounded-2xl flex items-center"
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
    </>
  );
};

export default ContactUsPage;
