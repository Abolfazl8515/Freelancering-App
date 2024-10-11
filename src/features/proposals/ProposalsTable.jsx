import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalsRow from "./ProposalsRow";
import useProposals from "../../hooks/useProposals";

const ProjectTable = () => {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;
  if (!proposals.length)
    return <Empty message="شما هنوز درخواستی ثبت نکرده اید" />;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>مبلغ</th>
          <th>وضعیت</th>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalsRow proposal={proposal} index={index} key={proposal._id} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectTable;
