import { GrProjects } from "react-icons/gr";
import Stat from "./Stat";
import { FaFolderOpen, FaWindowRestore } from "react-icons/fa";
import { FaFolderClosed } from "react-icons/fa6";

const OwnerStats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfOpenProjects = projects.filter((p) => p.status === "OPEN").length;
  const numOfClosedProjects = projects.filter(
    (p) => p.status === "CLOSED"
  ).length;
  const numOfProposals = projects.reduce((acc, curr) => {
    return curr.proposals.length + acc;
  }, 0);

  return (
    <div className="grid grid-cols-1 gap-x-8">
      <Stat
        icon={<GrProjects className="w-14 h-14" />}
        title="تعداد کل پروژه ها"
        value={numOfProjects}
        color="primary"
      />
      <Stat
        icon={<FaFolderOpen className="w-14 h-14" />}
        title=" پروژه های باز"
        value={numOfOpenProjects}
        color="green"
      />
      <Stat
        icon={<FaFolderClosed className="w-14 h-14" />}
        title=" پروژه های بسته"
        value={numOfClosedProjects}
        color="red"
      />
      <Stat
        icon={<FaWindowRestore className="w-14 h-14" />}
        title="تعداد درخواست ها"
        value={numOfProposals}
        color="yellow"
      />
    </div>
  );
};

export default OwnerStats;
