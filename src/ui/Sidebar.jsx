import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="row-start-1 row-span-2 p-4">
      <ul className="flex flex-col gap-y-2">
        <li>
          <CustomNavLink to="dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژها</span>
          </CustomNavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

const CustomNavLink = ({ children, to }) => {
  const navabarClass =
    "flex items-center gap-x-2 hover:bg-primary-300 p-2 rounded-lg hover:text-primary-900 transition-all ease-in duration-200 text-lg";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navabarClass} bg-primary-300 text-secondary-0`
          : `${navabarClass} text-secondary-600 hover:bg-primary-300 hover:text-primary-900`
      }
    >
      {children}
    </NavLink>
  );
};
