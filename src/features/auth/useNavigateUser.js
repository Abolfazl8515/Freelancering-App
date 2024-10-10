import { useNavigate } from "react-router-dom";

const useNavigateUser = (role) => {
  const navigate = useNavigate();
  if (role === "OWNER") navigate("/owner");
  if (role === "FREELANCER") navigate("/freelancer");
  if (role === "ADMIN") navigate("/admin");
};

export default useNavigateUser;
