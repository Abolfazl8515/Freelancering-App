import { FaWindowRestore } from "react-icons/fa";
import Stat from "../../ui/Stat";
import { FcAcceptDatabase } from "react-icons/fc";
import { IoWallet } from "react-icons/io5";
import { toPersianNumbersWithComma } from "../../utils/toPersianNum";

const FreelancerStats = ({ proposals }) => {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => {
    return curr.price + acc;
  }, 0);

  return (
    <div className="grid grid-cols-1 gap-x-8">
      <Stat
        icon={<FaWindowRestore className="w-14 h-14" />}
        title="تعداد کل درخواست ها "
        value={numOfProposals}
        color="primary"
      />
      <Stat
        icon={<FcAcceptDatabase className="w-14 h-14" />}
        title="درخواست های پذیرفته شده"
        value={acceptedProposals.length}
        color="green"
      />
      <Stat
        icon={<IoWallet className="w-14 h-14" />}
        title="کیف پول شما"
        value={toPersianNumbersWithComma(balance)}
        color="yellow"
      />
    </div>
  );
};

export default FreelancerStats;
