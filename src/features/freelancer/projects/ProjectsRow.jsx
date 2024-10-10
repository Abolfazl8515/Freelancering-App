import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import truncateStr from "../../../utils/truncateStr";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNum";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";
import { IoMdCheckmark } from "react-icons/io";

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
  const [isAlreadySent, setIsAlreadySent] = useState(false);
  const { title, budget, category, deadline, status } = project;

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
        {isAlreadySent ? (
          <IoMdCheckmark className="w-5 h-5 text-primary-500" />
        ) : (
          <>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              title={`درخواست برای پروژه ${project.title}`}
            >
              <CreateProposal
                projectId={project._id}
                onClose={() => setOpen(false)}
                setIsAlreadySent={setIsAlreadySent}
              />
            </Modal>
            <MdAssignmentAdd
              onClick={() => setOpen(true)}
              className="w-5 h-5 text-primary-500 cursor-pointer"
            />
          </>
        )}
      </td>
    </Table.Row>
  );
};

export default ProjectRow;
