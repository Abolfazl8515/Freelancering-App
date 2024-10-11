import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editProjectApi } from "../../services/projectService";
import useUser from "../auth/useUser";

const useEditProject = () => {
  const { user } = useUser();
  const query = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
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

  return { isEditing, editProject };
};

export default useEditProject;
