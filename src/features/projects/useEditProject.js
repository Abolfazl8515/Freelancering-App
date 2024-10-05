import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editProjectApi } from "../../services/projectService";

const useEditProject = () => {
  const query = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      query.invalidateQueries({ queryKey: ["owner-project"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, editProject };
};

export default useEditProject;
