import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/toPersianNum";
import truncateStr from "../../utils/truncateStr";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";

const ProjectRow = ({ project, index }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDelete, setIsDeleteOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();

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
      <td>
        <div className="flex items-center gap-x-2">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <FaPencil className="w-5 h-5 text-primary-800" />
            </button>
            <Modal
              open={isEditOpen}
              title={`ادیت ${project.title}`}
              onclose={() => setIsEditOpen(false)}
            >
              this is modal
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <FaTrashAlt className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isEditOpen}
              title={`حذف ${project.title}`}
              onclose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
