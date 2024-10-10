import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfilePage from "./pages/CompleteProfilePage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import OwnerDashboardPage from "./pages/OwnerDashboardPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectListPage from "./pages/ProjectListPage";
import { DarkModeProvier } from "./context/DarkModeProvider";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FrelancerDashboardPage from "./pages/FreelancerDashboardPage";
import ProposalsPage from "./pages/ProposalsPage";
import SubmittedProjects from "./pages/SubmittedProjects";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvier>
        <Toaster />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="complete-profile" element={<CompleteProfilePage />} />
          <Route path="owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboardPage />} />
            <Route path="projects" element={<ProjectListPage />} />
            <Route path="projects/:id" element={<ProjectPage />} />
          </Route>
          <Route path="freelancer" element={<FreelancerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FrelancerDashboardPage />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<ProposalsPage />} />
          </Route>
        </Routes>
      </DarkModeProvier>
    </QueryClientProvider>
  );
};

export default App;
