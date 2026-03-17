import React from 'react';
import { useAuth } from "../context/AuthContext";
import StatCard from '../components/StatCard';
import RobotCard from '../components/RobotCard';
import AdminLayout from '../layouts/AdminLayout';

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  console.log("Current user:", currentUser);
    // ---------------------------------------------------------------------------
    // BACKEND INTEGRATION NOTES
    // ---------------------------------------------------------------------------
    // 1. Fetch Dashboard Stats:
    //    Endpoints like GET /api/dashboard/stats should return:
    //    { totalBooks: 867, totalUsers: 69, activeUsers: 8, ... }

    // 2. Fetch Robot Status:
    //    Endpoints like GET /api/robots should return list of robots with:
    //    { id, name, status, battery, user, task, location, tasksToday }
    // ---------------------------------------------------------------------------

    // Mock Data (Replace with API response state)
    const stats = [
        { title: 'Total Books', count: 867 },
        { title: 'Total Users', count: 69 },
        { title: 'Active Users', count: 8 },
        { title: 'Books Borrowed', count: 38 },
        { title: 'Overdue Books', count: 4 },
        { title: 'Active Robots', count: 3 },
    ];


    const robots = [
        {
            id: 1,
            name: 'Robot-A01',
            status: 'Online',
            battery: 87,
            user: 'John',
            task: 'Searching',
            location: 'Section A',
            tasksToday: 10,
            image: 'https://api.dicebear.com/7.x/bottts/svg?seed=A01&backgroundColor=b6e3f4'
        },
        {
            id: 2,
            name: 'Robot-A02',
            status: 'Online',
            battery: 50,
            user: 'Amanda',
            task: 'Searching',
            location: 'Section A',
            tasksToday: 20,
            image: 'https://api.dicebear.com/7.x/bottts/svg?seed=A02&backgroundColor=b6e3f4'
        },
        {
            id: 3,
            name: 'Robot-A03',
            status: 'Online',
            battery: 10,
            user: 'Greg',
            task: 'Searching',
            location: 'Section A',
            tasksToday: 10,
            image: 'https://api.dicebear.com/7.x/bottts/svg?seed=A03&backgroundColor=b6e3f4'
        },
        {
            id: 4,
            name: 'Robot-A04',
            status: 'Offline',
            battery: 90,
            user: 'Emma',
            task: 'No',
            location: 'Section A',
            tasksToday: 20,
            image: 'https://api.dicebear.com/7.x/bottts/svg?seed=A04&backgroundColor=b6e3f4'
        },
    ];



     return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 bg-gray-50/50">
                <h2 className="mb-8 text-3xl font-bold text-gray-900">Dashboard</h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} title={stat.title} count={stat.count} />
                    ))}
                </div>

                {/* Robot Status Grid */}
                <h3 className="mb-4 text-xl font-bold text-gray-800">Robot Status</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {robots.map((robot) => (
                        <RobotCard key={robot.id} {...robot} />
                    ))}
                </div>
            </div>
        </AdminLayout>
    );


};

export default AdminDashboard;
