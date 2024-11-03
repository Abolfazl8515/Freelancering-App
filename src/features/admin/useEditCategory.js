import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategoryApi } from "../../services/categoryService";
import toast from "react-hot-toast";

const useEditCategory = () => {
  const query = useQueryClient();

  const { isPending: isEditing, mutate: editCategory } = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      query.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, editCategory };
};

export default useEditCategory;
