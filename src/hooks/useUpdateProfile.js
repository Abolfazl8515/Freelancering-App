import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useUser from "./useUser";
import { updateUserProfile } from "../services/userService";

const useUpdateProfile = () => {
  const { user } = useUser();
  const query = useQueryClient();

  const { isPending: isUpdating, mutate: updateProfile } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (data) => {
      toast.success(data.message);
      query.invalidateQueries({ queryKey: ["get-user"] });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, updateProfile };
};

export default useUpdateProfile;
