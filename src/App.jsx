import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <div className="container xl:max-w-screen-xl">
      <Routes>
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
