const Sidebar = ({ children }) => {
  return (
    <aside className="row-start-1 row-span-2 p-4 border-l border-secondary-200 bg-secondary-0">
      <ul className="flex flex-col gap-y-2">{children}</ul>
    </aside>
  );
};

export default Sidebar;
