import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import truncateStr from "../../../utils/truncateStr";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNum";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";
import useUser from "../../auth/useUser";
import { FaPencil } from "react-icons/fa6";
import useRemoveProject from "../../projects/useRemoveProject";
import CreateProjectForm from "../../projects/CreateProjectForm";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import { FaTrashAlt } from "react-icons/fa";

const statusStyle = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

const ProjectRow = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { title, budget, category, deadline, status } = project;
  const { removeProject, isDeleting } = useRemoveProject();
  const { user } = useUser();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateStr(title, 25)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{category.title}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <p className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </p>
      </td>
      <td>
        {user.role === "FREELANCER" ? (
          <>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              title={`درخواست برای پروژه ${project.title}`}
            >
              <CreateProposal
                projectId={project._id}
                onClose={() => setOpen(false)}
              />
            </Modal>
            <MdAssignmentAdd
              onClick={() => setOpen(true)}
              className="w-5 h-5 text-primary-500 cursor-pointer"
            />
          </>
        ) : (
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
                open={isDeleteOpen}
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
        )}
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
