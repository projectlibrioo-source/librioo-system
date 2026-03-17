import React from 'react';
import { Search, Battery } from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';

const RobotStatus = () => {
    const robots = [
        { id: '0100R', name: 'Robot 01', currentUser: 'Sandun', userId: '87549687', status: 'Online', lastActive: '2025.12.20', currentShelf: 'Shelf B4', battery: 85, remaining: '4h 35min', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=R01&backgroundColor=b6e3f4' },
        { id: '0101R', name: 'Robot 02', currentUser: 'Nimuthu', userId: '87549687', status: 'Offline', lastActive: '2025.12.20', currentShelf: 'Shelf A3', battery: 75, remaining: '3h 35min', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=R02&backgroundColor=b6e3f4' },
        { id: '0102R', name: 'Robot 03', currentUser: 'Dinuka', userId: '87549687', status: 'Online', lastActive: '2025.12.20', currentShelf: 'Shelf B4', battery: 65, remaining: '2h 35min', image: 'https://api.dicebear.com/7.x/bottts/svg?seed=R03&backgroundColor=b6e3f4' },
    ];

    return (
        <AdminLayout>
             <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h2 className="text-3xl font-bold text-gray-900">Robot Status</h2>
                    {/* Search Bar */}
                    <div className="relative w-full sm:w-96 flex bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden">
                        <select className="bg-gray-50 text-gray-700 text-sm py-2 pl-3 pr-8 border-none border-r border-gray-300 focus:ring-0 cursor-pointer outline-none">
                            <option>ID</option>
                            <option>Name</option>
                            <option>Current User</option>
                        </select>
                        <input
                            type="text"
                            className="block w-full py-2 pl-3 pr-10 leading-5 placeholder-gray-500 bg-transparent border-none focus:ring-0 focus:outline-none sm:text-sm"
                            placeholder="Search..."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Search className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {robots.map((robot, idx) => (
                        <div key={idx} className="bg-[#E6F3FA] rounded-3xl p-6 shadow-sm border border-blue-100 flex flex-col items-center relative overflow-hidden">
                            <div className="z-10 mb-6 text-center">
                                <h3 className="text-2xl font-bold text-gray-900">{robot.name}</h3>
                                <p className="text-sm font-bold text-gray-800">ID : {robot.id}</p>
                            </div>

                            <div className="z-10 w-full space-y-3 text-sm font-bold text-gray-900">
                                <div className="flex items-center justify-between">
                                    <span>O Current User :</span>
                                    <span>{robot.currentUser}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>O User ID      :</span>
                                    <span>{robot.userId}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>O Status       :</span>
                                    <span>{robot.status}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>O Last Active  :</span>
                                    <span>{robot.lastActive}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>O Current Shelf :</span>
                                    <span>{robot.currentShelf}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>O Battery      :</span>
                                    <span>{robot.battery}%</span>
                                </div>
                            </div>

                            <div className="z-10 flex items-center justify-between w-full px-4 mt-8">
                                <div className="flex items-end space-x-2">
                                    {/* Battery Icon mockup */}
                                    <div className="relative w-8 h-12 bg-gray-300 rounded border-2 border-green-600 flex flex-col justify-end p-0.5">
                                        <div className="w-full bg-green-500" style={{ height: `${robot.battery}%` }}></div>
                                    </div>
                                    <img src={robot.image} alt={robot.name} className="w-16 h-16" />
                                </div>

                                <div className="text-right">
                                    <p className="text-sm font-bold text-gray-900">Remaining</p>
                                    <p className="text-sm font-bold text-gray-900">{robot.remaining}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </AdminLayout>

        );
};

export default RobotStatus;