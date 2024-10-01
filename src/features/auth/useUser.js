import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

const useUser = () => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry:false,
    refetchOnWindowFocus:true
  });
};

export default useUser;
