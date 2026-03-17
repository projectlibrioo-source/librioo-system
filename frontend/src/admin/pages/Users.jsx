import React from 'react';
import { Search } from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';

const Users = () => {
    const users = [
        { id: '87548765', username: 'Sandun', email: 'sandun@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Student', booksBorrowed: 24 },
        { id: '87548765', username: 'Sulaksha', email: 'sulaksha@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Student', booksBorrowed: 20 },
        { id: '87548765', username: 'Nimuthu', email: 'nimuthu@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Staff', booksBorrowed: 12 },
        { id: '87548765', username: 'Withara', email: 'withara@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Student', booksBorrowed: 10 },
        { id: '87548765', username: 'Tharana', email: 'tharana@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Student', booksBorrowed: 15 },
        { id: '87548765', username: 'Hasintha', email: 'hasintha@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Lecturer', booksBorrowed: 30 },
        { id: '87548765', username: 'Dinuka', email: 'dinuka@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Student', booksBorrowed: 24 },
        { id: '87548765', username: 'Daksitha', email: 'daksitha@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Lecturer', booksBorrowed: 11 },
        { id: '87548765', username: 'Pasindu', email: 'pasindu@gmail.com', joined: '2024.05.06', lastLogin: '2024.05.06', type: 'Student', booksBorrowed: 10 },
    ];

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h2 className="text-3xl font-bold text-gray-900">Users</h2>

                    {/* Search Bar */}
                    <div className="relative flex w-full overflow-hidden bg-white border border-gray-300 rounded-lg shadow-sm sm:w-96 focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500">
                        <select className="py-2 pl-3 pr-8 text-sm text-gray-700 border-r border-gray-300 border-none outline-none cursor-pointer bg-gray-50 focus:ring-0">
                            <option>Username</option>
                            <option>ID</option>
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

                <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-blue-50/50">
                                <tr>
                                    {['User ID', 'Username', 'Email', 'Joined Date', 'Last Login', 'Membership Type', 'No of Books Borrowed'].map((header) => (
                                        <th
                                            key={header}
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-900 uppercase border-r border-gray-200 last:border-r-0"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user, idx) => (
                                    <tr key={idx} className="transition-colors hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {user.id}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {user.username}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {user.joined}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {user.lastLogin}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 border-r border-gray-200 whitespace-nowrap">
                                            {user.type}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                            {user.booksBorrowed}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Users;
