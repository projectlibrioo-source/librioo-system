import { BrowserRouter, Routes, Route } from "react-router-dom";
import RobotHome from "../../robot/pages/RobotHome";
import AdminDashboard from "../../admin/pages/AdminDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/robot" element={<RobotHome />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
