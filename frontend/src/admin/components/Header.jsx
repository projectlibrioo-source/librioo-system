import React, { useState } from 'react';
import { Search, Bell, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    // BACKEND: Replace with standard React Router hooks for navigation or state management if needed
    const [showNotifications, setShowNotifications] = useState(false);
    const [searchFilter, setSearchFilter] = useState('All');

    // BACKEND: Dummy Data for Notifications. Replace these with a fetch from your Spring Boot API (e.g., GET /api/notifications/recent)
    const unreadCount = 3;
    const latestNotifications = [
        { id: 1, text: 'Robot Alpha service due in 7 days', time: '10m ago' },
        { id: 2, text: 'Robot Beta encountered pathing error', time: '1h ago' },
        { id: 3, text: 'Book ISBN 1234 is overdue by John', time: '2h ago' }
    ];

    return (
        <header className="relative z-40 flex items-center justify-between h-16 px-8 bg-white border-b border-gray-100 shadow-sm">
            <div className="flex items-center w-1/2 space-x-3">
                <div className="relative flex-1 max-w-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-2 pl-6 pr-10 text-sm text-gray-700 transition-shadow bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-100"
                    />
                    <Search className="absolute right-4 top-2.5 w-4 h-4 text-gray-400" />
                </div>
            </div>

            <div className="flex items-center space-x-6">
                {/* Notifications Trigger */}
                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative p-1 mt-1 text-gray-600 transition-colors hover:text-blue-600"
                    >
                        <Bell className="w-5 h-5" />
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-[0.4rem] py-[0.1rem] text-[10px] font-bold text-white bg-red-500 rounded-full border-2 border-white">
                                {unreadCount}
                            </span>
                        )}
                    </button>

                    {showNotifications && (
                        <div className="absolute right-0 py-2 mt-3 bg-white border border-gray-100 rounded-lg shadow-xl w-80">
                            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
                                <span className="font-bold text-gray-800">Latest Notifications</span>
                                <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full">{unreadCount} New</span>
                            </div>
                            <div className="overflow-y-auto max-h-64">
                                {latestNotifications.map(notif => (
                                    <div key={notif.id} className="px-4 py-3 transition-colors border-b cursor-pointer hover:bg-gray-50 border-gray-50">
                                        <p className="text-sm text-gray-800">{notif.text}</p>
                                        <p className="mt-1 text-xs text-gray-500">{notif.time}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="px-4 py-2 text-center border-t border-gray-50">
                                {/* BACKEND: Link to the full notifications page */}
                                <a href="/admin/notifications" className="text-sm font-bold text-blue-600 hover:text-blue-800">View full list</a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="w-8 h-8 overflow-hidden rounded-full bg-slate-200">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Admin"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Admin</span>
                </div>

                <button
                    className="flex items-center ml-4 font-medium text-gray-700 transition-colors hover:text-red-500"
                    onClick={() => {
                        const { logout } = useAuth();
                        const navigate = useNavigate();

                        const handleLogout = async () => {
                            await logout();        // signs out from Firebase
                            navigate('/admin/login'); // redirects to login page
                        };
                    }}
                >
                    Logout
                    <ChevronDown className="w-4 h-4 ml-1" />
                </button>
            </div>
        </header>
    );
};

export default Header;
