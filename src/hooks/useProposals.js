import { useQuery } from "@tanstack/react-query";
import { getProposlasApi } from "../services/proposalService";

const useProposals = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposlasApi,
    refetchOnReconnect: true,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { proposals } = data || {};

  return { proposals, isLoading };
};

export default useProposals;
