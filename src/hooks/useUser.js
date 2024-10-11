import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/authService";

const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    refetchOnReconnect: true,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { user } = data || {};

  return { user,isLoading };
};

export default useUser;
