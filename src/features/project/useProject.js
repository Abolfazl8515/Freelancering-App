import { useParams } from "react-router-dom";
import { getProjectApi } from "../../services/projectService";
import { useQuery } from "@tanstack/react-query";

const useProject = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
    refetchOnReconnect: true,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { project } = data || {};

  return { project, isLoading };
};

export default useProject;
