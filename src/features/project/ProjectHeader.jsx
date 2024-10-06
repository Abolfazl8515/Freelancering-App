import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

const ProjectHeader = ({ project }) => {
  const moveback = useMoveBack();
  return (
    <div className="flex items-center gap-x-2 mb-4">
      <button onClick={moveback}>
        <HiArrowRight className="w-5 h-5 text-secondary-700" />
      </button>
      <h2 className="font-bold text-secondary-700 text-xl">
        لیست درخواست های پروژه {project.title}
      </h2>
    </div>
  );
};

export default ProjectHeader;
