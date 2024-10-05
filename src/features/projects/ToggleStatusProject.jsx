import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";
import useToggleStatus from "./useToggleStatus";

const ToggleStatusProject = ({ project }) => {
  const { isUpdating, toggleStatus } = useToggleStatus();
  const enabled = project.status === "OPEN" ? true : false;

  const changeHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleStatus({ id: project._id, data: { status } });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle enabled={enabled} onChange={changeHandler} />
      )}
    </div>
  );
};

export default ToggleStatusProject;
