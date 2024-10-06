import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNum";
import truncateStr from "../../utils/truncateStr";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge badge--success",
  },
];

const ProposalRow = ({ proposal, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>
        <p className="flex flex-wrap">
          {truncateStr(proposal.description, 100)}
        </p>
      </td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <p className={`${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </p>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`تغییر وضعیت درخواست ${proposal.user.name}`}
        >
          <ChangeProposalStatus
            proposal={proposal}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
};

export default ProposalRow;
