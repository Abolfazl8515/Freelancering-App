import useProjects from "../../hooks/useProjects";
import Loading from "../../ui/Loading";
import useProposals from "../../hooks/useProposals";
import AdminHeader from "./AdminHeader";
import AdminStats from "./AdminStats";
import useUsers from "./useUsers";
import useCategories from "../../hooks/useCategories";

const AdminDashboard = () => {
  const { isLoading: usersLoading, users } = useUsers();
  const { isLoading: projectsLoading, projects } = useProjects();
  const { isLoading: proposalsLoading, proposals } = useProposals();
  const { isLoading, categories } = useCategories();

  if (isLoading || usersLoading || projectsLoading || proposalsLoading)
    return <Loading />;

  return (
    <div>
      <AdminHeader />
      <AdminStats
        categories={categories}
        users={users}
        proposals={proposals}
        projects={projects}
      />
    </div>
  );
};

export default AdminDashboard;
