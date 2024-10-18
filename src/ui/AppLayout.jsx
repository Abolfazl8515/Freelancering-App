import { Outlet } from "react-router-dom";
import Header from "./Header";
import useDevice from "../hooks/useDevice";

const AppLayout = ({ children }) => {
  const { isMobileDevice } = useDevice("(max-width: 1024px)");
  return (
    <div className="flex flex-col lg:grid h-screen lg:grid-rows-[auto_1fr] lg:grid-cols-[15rem_1fr]">
      {!isMobileDevice && <Header />}
      {children}
      <div className="p-8 overflow-y-auto bg-secondary-100 rounded-tr-xl">
        <div className="mx-auto max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
