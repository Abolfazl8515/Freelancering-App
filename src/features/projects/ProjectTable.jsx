import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";

const ProjectTable = () => {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty message="شما هنوز پروژه ایی ندارید" />;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
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
