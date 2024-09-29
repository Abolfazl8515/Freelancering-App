import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfilePage from "./pages/CompleteProfilePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container xl:max-w-screen-xl">
        <Toaster />
        <Routes>
          <Route path="auth" element={<AuthPage />} />
          <Route path="complete-profile" element={<CompleteProfilePage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
