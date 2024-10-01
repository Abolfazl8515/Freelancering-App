import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";

const useOwnerProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-project"],
    queryFn: getOwnerProjectsApi,
    refetchOnReconnect: true,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};

  return { projects, isLoading };
};

export default useOwnerProjects;
