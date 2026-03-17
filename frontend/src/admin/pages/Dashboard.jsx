import React from 'react';
import StatCard from '../components/StatCard';
import RobotCard from '../components/RobotCard';
import AdminLayout from '../layouts/AdminLayout';

const Dashboard = () => {

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

export default Dashboard;
