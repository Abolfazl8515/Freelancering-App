import { FcAcceptDatabase } from "react-icons/fc";
import Stat from "../../ui/Stat";
import { FaUserCircle } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { MdCategory } from "react-icons/md";

const AdminStats = ({ users, proposals, projects, categories }) => {
  const numOfUsers = users.length;
  const numOfProposals = proposals.length;
  const numOfProjects = projects.length;
  const numOfCategories = categories.length;

  return (
    <div className="grid grid-cols-1 gap-x-8">
      <Stat
        icon={<FaUserCircle className="w-14 h-14" />}
        title="تعداد کاربران"
        value={numOfUsers}
        color="primary"
      />
      <Stat
        icon={<FcAcceptDatabase className="w-14 h-14" />}
        title="تعداد پروژه ها"
        value={numOfProjects}
        color="green"
      />
      <Stat
        icon={<FiGrid className="w-14 h-14" />}
        title="تعداد درخواست ها"
        value={numOfProposals}
        color="yellow"
      />
      <Stat
        icon={<MdCategory className="w-14 h-14" />}
        title="تعداد دسته بندی ها"
        value={numOfCategories}
        color="red"
      />
    </div>
  );
};

export default AdminStats;
