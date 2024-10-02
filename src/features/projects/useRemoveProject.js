import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

const useRemoveProject = () => {
  const query = useQueryClient();

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: ({ data }) => {
      toast.success(data.message);
      query.invalidateQueries({ queryKey: ["owner-project"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { removeProject, isDeleting };
};

export default useRemoveProject;
