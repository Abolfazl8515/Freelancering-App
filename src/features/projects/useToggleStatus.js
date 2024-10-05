import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { toggleProjectStatusApi } from "../../services/projectService";

const useToggleStatus = () => {
  const query = useQueryClient();

  const { isPending: isUpdating, mutate: toggleStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      query.invalidateQueries({ queryKey: ["owner-project"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, toggleStatus };
};

export default useToggleStatus;
