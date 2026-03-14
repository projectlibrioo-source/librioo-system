import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../robot/pages/LoginPage";
import MemberLogin from "../../robot/pages/MemberLogin";
import UserDetails from "../../robot/pages/UserDetails";
import SearchPage from "../../robot/pages/SearchPage";
import SearchBook from "../../robot/pages/SearchBook";
import FollowPage from "../../robot/pages/FolloPage";
import SelectionPage from "../../robot/pages/SelectionPage";
import BorrowPage from "../../robot/pages/BorrowPage";
import EndingPage from "../../robot/pages/EndingPage";
import AdminDashboard from "../../admin/pages/AdminDashboard";
import AdminLogin from "../../admin/pages/AdminLogin";
import ManageUsers from "../../admin/pages/ManageUsers";
import ManageBooks from "../../admin/pages/ManageBooks";
import Settings from "../../admin/pages/Settings";

import GuestLogin from "../../robot/pages/GuestLogin";



import SearchCategory from "../../robot/pages/SearchCategory";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/robot/login" element={<LoginPage />} />
        <Route path="/robot/member-login" element={<MemberLogin />} />
        <Route path="/robot/user-details" element={<UserDetails />} />
        <Route path="/robot/search" element={<SearchPage />} />
        <Route path="/robot/search-book" element={<SearchBook />} />
        <Route path="/robot/follow" element={<FollowPage />} />
        <Route path="/robot/selection" element={<SelectionPage />} />
        <Route path="/robot/borrow" element={<BorrowPage />} />
        <Route path="/robot/ending" element={<EndingPage />} />
        <Route path="/robot/guest-login" element={<GuestLogin />} />
        <Route path="/robot/search-category" element={<SearchCategory />} />
        
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-books" element={<ManageBooks />} />
        <Route path="/admin/settings" element={<Settings />} />


      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
