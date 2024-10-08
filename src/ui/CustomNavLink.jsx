import { NavLink } from "react-router-dom";

const CustomNavLink = ({ children, to }) => {
  const navabarClass =
    "flex items-center gap-x-2 hover:bg-primary-300 p-2 rounded-lg hover:text-primary-900 transition-all ease-in duration-200 text-lg";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navabarClass} bg-primary-300 text-secondary-900`
            : `${navabarClass} text-secondary-900 hover:bg-primary-300 hover:text-primary-900`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default CustomNavLink;
