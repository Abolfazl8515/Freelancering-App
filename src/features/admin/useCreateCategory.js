import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategoryApi } from "../../services/categoryService";
import toast from "react-hot-toast";

const useCreateCategory = () => {
  const query = useQueryClient();

  const { isPending: isCreating, mutate: createCategory } = useMutation({
    mutationFn: addCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      query.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, createCategory };
};

export default useCreateCategory;
