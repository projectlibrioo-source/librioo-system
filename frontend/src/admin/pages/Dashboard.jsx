import React from 'react';
import StatCard from '../components/StatCard';
import RobotCard from '../components/RobotCard';
import AdminLayout from '../layouts/AdminLayout';

const Dashboard = () => {

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
