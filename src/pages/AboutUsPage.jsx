import { useDarkMode } from "../context/DarkModeProvider";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

const AboutUsPage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 mx-auto max-w-7xl z-20 w-full">
        <Header />
      </div>
      <div className="text-center space-y-10 mt-20 flex-1">
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
          <p className="w-3/4 text-secondary-700 text-justify mx-auto max-w-[800px]">
            سایت فریلنسری کارینو به عنوان یک پلتفرم حرفه‌ای، با هدف ایجاد ارتباط
            مستقیم بین کارفرمایان و فریلنسرها طراحی شده است. در کارینو،
            کارفرمایان می‌توانند پروژه‌های خود را به سادگی تعریف کرده و با
            انتخاب از بین طیف گسترده‌ای از فریلنسرهای متخصص در زمینه‌های مختلف،
            از برنامه‌نویسی و طراحی گرافیک تا نویسندگی و ترجمه، به بهترین نتیجه
            دست یابند
          </p>
          <p className="w-3/4 text-secondary-700 text-justify mx-auto max-w-[800px]">
            کارینو بستری امن و کاربرپسند فراهم کرده است تا فریلنسرها بتوانند از
            مهارت‌های خود کسب درآمد کنند، در حالی که کارفرمایان به خدمات با
            کیفیت دسترسی دارند. سیستم ارزیابی و نظرات کاربران در این سایت،
            شفافیت و اعتماد متقابل را تضمین می‌کند. هدف ما در کارینو، تسهیل
            فرایند همکاری آنلاین و کمک به رشد و توسعه کسب‌و‌کارها و فریلنسرهاست.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
