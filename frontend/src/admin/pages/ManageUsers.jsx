import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const ManageUsers = () => {
    const [activeTab, setActiveTab] = useState('ADD');
    const [userRole, setUserRole] = useState('MEMBER');

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-12 font-sans bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900">Manage Users</h2>

                <div className="max-w-4xl p-8 mx-auto space-y-8 bg-white border border-gray-200 shadow-sm rounded-xl">
                    <div className="flex space-x-4 mb-6 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('ADD')}
                            className={`pb-2 px-1 ${activeTab === 'ADD' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            ADD
                        </button>
                        <button
                            onClick={() => setActiveTab('UPDATE')}
                            className={`pb-2 px-1 ${activeTab === 'UPDATE' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            UPDATE
                        </button>
                        <button
                            onClick={() => setActiveTab('DELETE')}
                            className={`pb-2 px-1 ${activeTab === 'DELETE' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            DELETE
                        </button>
                    </div>

                    {/* Add User Section */}
                    {activeTab === 'ADD' && (
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Add User</h3>
                                <div className="flex bg-gray-200 rounded-md p-1">
                                    <button
                                        type="button"
                                        onClick={() => setUserRole('MEMBER')}
                                        className={`px-4 py-1 text-sm font-medium rounded-md ${userRole === 'MEMBER' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Member
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setUserRole('GUEST')}
                                        className={`px-4 py-1 text-sm font-medium rounded-md ${userRole === 'GUEST' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                                    >
                                        Guest
                                    </button>
                                </div>
                            </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ManageUsers;
