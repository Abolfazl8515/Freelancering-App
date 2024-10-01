import { FaArrowRight } from "react-icons/fa";
import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center">
        <div className="w-full pt-24 sm:max-w-sm">
          <p className="text-9xl text-center text-secondary-700">404</p>
          <h2 className="text-center text-secondary-700">
            صفحه مورد نظر شما یافت نشد
          </h2>
          <button
            className="btn btn--primary w-full flex items-center justify-center"
            onClick={moveBack}
          >
            <FaArrowRight className="ml-1" />
            برگشت
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
