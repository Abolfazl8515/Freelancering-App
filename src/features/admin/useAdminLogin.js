import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { loginAdmin } from "../../services/authService";

const useAdminLogin = () => {
  const { isPending: isLogging, mutate: login } = useMutation({
    mutationFn: loginAdmin,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isLogging, login };
};

export default useAdminLogin;
