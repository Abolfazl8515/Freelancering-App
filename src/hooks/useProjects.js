import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

const useProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: getProjectsApi,
    refetchOnReconnect: true,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};

  return { projects, isLoading };
};

export default useProjects;
