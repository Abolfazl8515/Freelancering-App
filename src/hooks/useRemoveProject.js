import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../services/projectService";
import toast from "react-hot-toast";
import useUser from "./useUser";

const useRemoveProject = () => {
  const { user } = useUser();
  const query = useQueryClient();

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      if (user.role === "ADMIN") {
        query.invalidateQueries({ queryKey: ["project"] });
      } else {
        query.invalidateQueries({ queryKey: ["owner-project"] });
      }
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { removeProject, isDeleting };
};

export default useRemoveProject;
