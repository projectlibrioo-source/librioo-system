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
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/robot/guest-login" element={<GuestLogin />} />

        
        
        
        <Route path="/robot/search-category" element={<SearchCategory />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
