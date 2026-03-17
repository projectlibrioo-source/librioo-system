// src/common/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Robot pages
import LoginPage from "../../robot/pages/LoginPage";
import MemberLogin from "../../robot/pages/MemberLogin";
import UserDetails from "../../robot/pages/UserDetails";
import SearchPage from "../../robot/pages/SearchPage";
import SearchBook from "../../robot/pages/SearchBook";
import FollowPage from "../../robot/pages/FolloPage";
import SelectionPage from "../../robot/pages/SelectionPage";
import BorrowPage from "../../robot/pages/BorrowPage";
import EndingPage from "../../robot/pages/EndingPage";
import GuestLogin from "../../robot/pages/GuestLogin";
import SearchCategory from "../../robot/pages/SearchCategory";

// Admin pages (only existing ones)
import AdminLogin from "../../admin/pages/AdminLogin";
import AdminDashboard from "../../admin/pages/AdminDashboard";
import ManageUsers from "../../admin/pages/ManageUsers";
import ManageBooks from "../../admin/pages/ManageBooks";
import ManageTransactions from "../../admin/pages/ManageTransactions";
import Settings from "../../admin/pages/Settings";
import ActivityLogs from "../../admin/pages/ActivityLogs";
import Notifications from "../../admin/pages/Notifications";

// Auth
import { AuthProvider } from "../../admin/context/AuthContext";
import ProtectedRoute from "../../admin/components/ProtectedRoute";

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* ── Robot Routes (public) ───────────────────────────── */}
          <Route path="/robot/login"            element={<LoginPage />} />
          <Route path="/robot/member-login"     element={<MemberLogin />} />
          <Route path="/robot/user-details"     element={<UserDetails />} />
          <Route path="/robot/search"           element={<SearchPage />} />
          <Route path="/robot/search-book"      element={<SearchBook />} />
          <Route path="/robot/follow"           element={<FollowPage />} />
          <Route path="/robot/selection"        element={<SelectionPage />} />
          <Route path="/robot/borrow"           element={<BorrowPage />} />
          <Route path="/robot/ending"           element={<EndingPage />} />
          <Route path="/robot/guest-login"      element={<GuestLogin />} />
          <Route path="/robot/search-category"  element={<SearchCategory />} />

          {/* ── Admin Public ────────────────────────────────────── */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ── Admin Protected ─────────────────────────────────── */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute><AdminDashboard /></ProtectedRoute>
          } />
          <Route path="/admin/manage-users" element={
            <ProtectedRoute><ManageUsers /></ProtectedRoute>
          } />
          <Route path="/admin/manage-books" element={
            <ProtectedRoute><ManageBooks /></ProtectedRoute>
          } />
          <Route path="/admin/manage-transactions" element={
            <ProtectedRoute><ManageTransactions /></ProtectedRoute>
          } />
          <Route path="/admin/settings" element={
            <ProtectedRoute><Settings /></ProtectedRoute>
          } />
          <Route path="/admin/activity-logs" element={
            <ProtectedRoute><ActivityLogs /></ProtectedRoute>
          } />
          <Route path="/admin/notifications" element={
            <ProtectedRoute><Notifications /></ProtectedRoute>
          } />

          {/* ── Redirects ───────────────────────────────────────── */}
          <Route path="/"      element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route path="*"      element={<Navigate to="/admin/login" replace />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;