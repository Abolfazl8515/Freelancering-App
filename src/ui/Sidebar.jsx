import useUser from "../hooks/useUser";

const roles = {
  FREELANCER: { label: "فریلنسر" },
  ADMIN: { label: "ادمین" },
  OWNER: { label: "کارفرما" },
};

const Sidebar = ({ children }) => {
  const { user } = useUser();
  return (
    <aside className="md:relative h-full flex flex-col justify-between md:row-start-1 md:row-span-2 p-4 bg-secondary-0">
      <ul className="flex flex-col gap-y-2 pt-10">{children}</ul>
      <div className="w-5/6 flex items-center md:absolute md:bottom-7 gap-x-5">
        <div className="w-10 h-10 bg-secondary-300 flex justify-center items-center rounded-full ring-2 ring-secondary-200 relative">
          <p className="text-white text-xl">{user.name[0]}</p>
          <span className="absolute bottom-0 right-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
        </div>
        <div>
          <h4 className="font-bold text-secondary-600">{user.name}</h4>
          <p className="text-secondary-600">{roles[user.role].label}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
