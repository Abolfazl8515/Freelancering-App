import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCategoryApi } from "../../services/categoryService";
import toast from "react-hot-toast";

const useRemoveCategory = () => {
  const query = useQueryClient();

  const { isPending: isDeleting, mutate: removeCategory } = useMutation({
    mutationFn: removeCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      query.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, removeCategory };
};

export default useRemoveCategory;
