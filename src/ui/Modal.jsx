import { FaTimes } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";

const Modal = ({ children, open, title, onClose }) => {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div
        className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800 bg-opacity-30 z-50"
      >
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="w-full flex items-center justify-between p-2">
            <h3 className="text-base text-secondary-700">{title}</h3>
            <button onClick={onClose}>
              <FaTimes className="w-5 h-5 text-secondary-600" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
