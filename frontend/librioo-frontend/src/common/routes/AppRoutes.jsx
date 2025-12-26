import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../robot/pages/LoginPage";
import MemberLogin from "../../robot/pages/MemberLogin";
import UserDetails from "../../robot/pages/UserDetails";
import SearchPage from "../../robot/pages/SearchPage";
import AdminDashboard from "../../admin/pages/AdminDashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/robot/login" element={<LoginPage />} />
        <Route path="/robot/member-login" element={<MemberLogin />} />
        <Route path="/robot/user-details" element={<UserDetails />} />
        <Route path="/robot/search" element={<SearchPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
