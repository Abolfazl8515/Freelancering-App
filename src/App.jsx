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
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UsersPage from "./pages/UsersPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import AdminProfilePage from "./pages/AdminProfilePage";
import FreelancerProfilePage from "./pages/FreelancerProfilePage";
import OwnerProfilePage from "./pages/OwnerProfilePage";
import LoginAdminPage from "./pages/LoginAdminPage";
import CategoriesPage from "./pages/CategoriesPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvier>
        <Toaster />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="adminlogin" element={<LoginAdminPage />} />
          <Route path="complete-profile" element={<CompleteProfilePage />} />
          <Route
            path="owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboardPage />} />
            <Route path="projects" element={<ProjectListPage />} />
            <Route path="projects/:id" element={<ProjectPage />} />
            <Route path="profile" element={<OwnerProfilePage />} />
          </Route>
          <Route
            path="freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FrelancerDashboardPage />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<ProposalsPage />} />
            <Route path="profile" element={<FreelancerProfilePage />} />
          </Route>
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<ProposalsPage />} />
            <Route path="profile" element={<AdminProfilePage />} />
            <Route path="categories" element={<CategoriesPage />} />
          </Route>
        </Routes>
      </DarkModeProvier>
    </QueryClientProvider>
  );
};

export default App;
