import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../robot/pages/LoginPage";
import RobotHome from "../../robot/pages/RobotHome";
import AdminDashboard from "../../admin/pages/AdminDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/robot/login" element={<LoginPage />} />
        <Route path="/robot/member-login" element={<RobotHome />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
