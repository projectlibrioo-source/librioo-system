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

        </AdminLayout>

        );
};

export default RobotStatus;