import Table from "../../ui/Table";
import { toPersianNumbersWithComma } from "../../utils/toPersianNum";
import truncateStr from "../../utils/truncateStr";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { FaPencil, FaS } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateProjectForm from "./CreateProjectForm";
import ToggleStatusProject from "./ToggleStatusProject";
import { HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import useRemoveProject from "../../hooks/useRemoveProject";

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
        <ToggleStatusProject project={project} />
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
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                onClose={() => setIsEditOpen(false)}
                projectToEdit={project}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <FaTrashAlt className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isDelete}
              title={`حذف ${project.title}`}
              onClose={() => setIsDeleteOpen(false)}
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
      <td>
        <Link to={project._id} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-900 cursor-pointer" />
        </Link>
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
