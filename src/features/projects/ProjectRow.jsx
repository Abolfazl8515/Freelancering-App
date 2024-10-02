import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/toPersianNum";
import truncateStr from "../../utils/truncateStr";
import toLocalDateShort from "../../utils/toLocalDateShort";

const ProjectRow = ({ project, index }) => {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateStr(project.title, 25)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex items-center flex-wrap gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>عملیات</td>
    </Table.Row>
  );
};

export default ProjectRow;
