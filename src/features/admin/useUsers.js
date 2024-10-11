import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/userService";

const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersApi,
    refetchOnReconnect: true,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { users } = data || {};

  return { users, isLoading };
};

export default useUsers;
