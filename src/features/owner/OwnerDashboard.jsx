import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import OwnerDashboardHeader from "./OwnerDashboardHeader";
import OwnerStats from "./OwnerStats";

const OwnerDashboard = () => {
  const { isLoading, projects } = useOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <OwnerDashboardHeader />
      <OwnerStats projects={projects} />
    </div>
  );
};

export default OwnerDashboard;
