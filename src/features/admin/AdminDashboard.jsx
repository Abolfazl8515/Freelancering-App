import useProjects from "../../hooks/useProjects";
import Loading from "../../ui/Loading";
import useProposals from "../../hooks/useProposals";
import AdminHeader from "./AdminHeader";
import AdminStats from "./AdminStats";
import useUsers from "./useUsers";

const AdminDashboard = () => {
  const { isLoading: usersLoading, users } = useUsers();
  const { isLoading: projectsLoading, projects } = useProjects();
  const { isLoading: proposalsLoading, proposals } = useProposals();

  if (usersLoading || projectsLoading || proposalsLoading) return <Loading />;

  return (
    <div>
      <AdminHeader />
      <AdminStats users={users} proposals={proposals} projects={projects} />
    </div>
  );
};

export default AdminDashboard;
