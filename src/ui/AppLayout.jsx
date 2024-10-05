import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className="p-8 overflow-y-auto bg-secondary-100">
        <div className="mx-auto max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
