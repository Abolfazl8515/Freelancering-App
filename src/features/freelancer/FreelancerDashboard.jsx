import Loading from "../../ui/Loading";
import useProposals from "../../hooks/useProposals";
import FreelancerHeader from "./FreelancerHeader";
import FreelancerStats from "./FreelancerStats";

const FreelancerDashboard = () => {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  return (
    <div>
      <FreelancerHeader />
      <FreelancerStats proposals={proposals} />
    </div>
  );
};

export default FreelancerDashboard;
