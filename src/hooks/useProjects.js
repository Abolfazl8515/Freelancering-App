import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const useProjects = () => {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  const { data, isLoading } = useQuery({
    queryKey: ["project",,queryObject],
    queryFn: ()=>getProjectsApi(search),
    refetchOnReconnect: true,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};

  return { projects, isLoading };
};

export default useProjects;
