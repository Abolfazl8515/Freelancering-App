import { FaTimes } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";

const Modal = ({ children, open, title, onclose }) => {
  const ref = useOutsideClick(onclose);
  return (
    open && (
      <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 rounded-lg shadow-sm p-4"
        >
          <div className="flex items-center justify-between p-2">
            <h3 className="text-base text-secondary-700">{title}</h3>
            <button onClick={onclose}>
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
