import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProjectApi } from "../../services/projectService";
import useUser from "../auth/useUser";

const useCreateProject = () => {
  const { user } = useUser();
  const query = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
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

  return { isCreating, createProject };
};

export default useCreateProject;
