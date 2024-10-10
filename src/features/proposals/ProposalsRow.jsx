import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNum";
import truncateStr from "../../utils/truncateStr";

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

const ProposalsRow = ({ proposal, index }) => {
  const { status, price, duration, description } = proposal;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateStr(description, 60)}</td>
      <td>{toPersianNumbers(duration) + "روز"}</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <p className={`${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </p>
      </td>
    </Table.Row>
  );
};

export default ProposalsRow;
