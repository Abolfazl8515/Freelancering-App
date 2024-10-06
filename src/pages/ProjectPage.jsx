import ProjectHeader from "../features/project/projectHeader";
import ProposalsTable from "../features/project/ProposalsTable";
import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";

const ProjectPage = () => {
  const { isLoading, project } = useProject();
  console.log(project);

  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
};

export default ProjectPage;
