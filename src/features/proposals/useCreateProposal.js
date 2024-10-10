import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { careateProposalApi } from "../../services/proposalService";

const useCreateProposal = () => {
  const query = useQueryClient();

  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: careateProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      query.invalidateQueries({ queryKey: ["proposals"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, createProposal };
};

export default useCreateProposal;
