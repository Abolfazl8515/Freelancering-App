import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectsRow";

const ProjectTable = () => {
  const { projects, isLoading } = useProjects();
  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty message="پروژه ایی وجود ندارد" />;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه(تومان)</th>
          <th>دسته بندی</th>
          <th>زمان تحویل</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow project={project} index={index} key={project._id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectTable;
