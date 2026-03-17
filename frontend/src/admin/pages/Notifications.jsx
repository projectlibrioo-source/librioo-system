import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const Notifications = () => {
    const [dailyOverdues, setDailyOverdues] = useState(true);
    const [robotAlerts, setRobotAlerts] = useState(true);
    const [filterType, setFilterType] = useState('All');

    // BACKEND: Dummy Notification Data. Fetch from your Spring Boot API (e.g., GET /api/notifications)
    // You should filter or categorize them on the backend, or return a type property.
    const notifications = [
        { id: 1, type: 'robot', title: 'Service Upcoming', text: 'Robot Alpha needs routine maintenance in 7 days.', date: 'Oct 24, 10:00AM', read: false },
        { id: 2, type: 'error', title: 'Pathing Error', text: 'Robot Beta encountered an obstacle near Section C.', date: 'Oct 24, 09:15AM', read: false },
        { id: 3, type: 'book', title: 'Book Overdue', text: 'User ID: 1042 has kept "The Great Gatsby" overdue by 3 days.', date: 'Oct 23, 04:30PM', read: true },
        { id: 4, type: 'system', title: 'System Update', text: 'Library Management System will undergo maintenance tonight at 11:00 PM.', date: 'Oct 22, 11:00AM', read: true },
    ];

    const getIconForType = (type) => {
        switch (type) {
            case 'robot': return <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">🤖</span>;
            case 'error': return <span className="p-2 bg-red-100 text-red-600 rounded-lg">⚠️</span>;
            case 'book': return <span className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">📚</span>;
            case 'system': return <span className="p-2 bg-green-100 text-green-600 rounded-lg">⚙️</span>;
            default: return <span className="p-2 bg-gray-100 text-gray-600 rounded-lg">📢</span>;
        }
    };

    const filteredNotifications = notifications.filter(notif => {
        if (filterType === 'All') return true;
        if (filterType === 'Robots' && (notif.type === 'robot' || notif.type === 'error')) return true;
        if (filterType === 'Books' && notif.type === 'book') return true;
        if (filterType === 'System' && notif.type === 'system') return true;
        return false;
    });

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <div className="mb-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
                        <p className="text-sm text-gray-500 mt-1">Admin / Notifications</p>
                    </div>
                    {/* BACKEND: When connecting, clicking this could trigger a PUT request to mark all as read */}
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                        Mark all as read
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Detailed Notifications List */}
                    <div className="lg:col-span-2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm h-fit">
                        <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                            <h3 className="text-xl font-bold text-gray-800">All Alerts</h3>

                            {/* Filter Dropdown */}
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="p-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
                            >
                                <option value="All">All Types</option>
                                <option value="Robots">Robot Alerts</option>
                                <option value="Books">Book Overdues</option>
                                <option value="System">System Notices</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            {filteredNotifications.map(notif => (
                                <div key={notif.id} className={`flex items-start gap-4 p-4 rounded-lg border ${!notif.read ? 'bg-blue-50/50 border-blue-100' : 'bg-white border-gray-100 hover:bg-gray-50'}`}>
                                    <div className="flex-shrink-0 mt-1">
                                        {getIconForType(notif.type)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className={`text-md ${!notif.read ? 'font-bold text-gray-900' : 'font-medium text-gray-800'}`}>
                                                {notif.title}
                                            </h4>
                                            <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{notif.date}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{notif.text}</p>
                                    </div>
                                    {!notif.read && (
                                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Notification Settings */}
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Alert Preferences</h3>
                            <div className="flex flex-col space-y-4">

                                {/* BACKEND: These toggles should send a PATCH/PUT to user preferences endpoint */}
                                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                                    <span className="text-sm font-medium text-gray-700">Daily Book Overdues</span>
                                    <button
                                        onClick={() => setDailyOverdues(!dailyOverdues)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${dailyOverdues ? 'bg-blue-600' : 'bg-gray-300'}`}
                                    >
                                        <span className={`${dailyOverdues ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                                    <span className="text-sm font-medium text-gray-700">Robot Status Alerts</span>
                                    <button
                                        onClick={() => setRobotAlerts(!robotAlerts)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${robotAlerts ? 'bg-blue-600' : 'bg-gray-300'}`}
                                    >
                                        <span className={`${robotAlerts ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                                    </button>
                                </div>

                                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition text-sm font-medium mt-2">
                                    Send Test Alert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Notifications;