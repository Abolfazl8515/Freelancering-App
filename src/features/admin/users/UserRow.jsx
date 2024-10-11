import { useState } from "react";
import { toPersianNumbers } from "../../../utils/toPersianNum";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./changeUserStatus";

const userStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

const UserRow = ({ user, index }) => {
  const [open, setOpen] = useState(false);
  const { name, email, phoneNumber, role, status } = user;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toPersianNumbers(phoneNumber)}</td>
      <td>{role}</td>
      <td>
        <p className={`badge ${userStyle[status].className}`}>
          {userStyle[status].label}
        </p>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`تغییر وضعیت کاربر ${name}`}
        >
          <ChangeUserStatus user={user} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
};

export default UserRow;
