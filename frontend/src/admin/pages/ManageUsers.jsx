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
                            {/* BACKEND: POST /api/users */}
                            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">{userRole === 'MEMBER' ? 'Library ID' : 'Guest ID'}</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Full Name</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Address</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                {userRole === 'MEMBER' && (
                                    <>
                                        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                            <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Occupation</label>
                                            <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                        </div>
                                        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                            <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Work/School Address</label>
                                            <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                        </div>
                                    </>
                                )}
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Email</label>
                                    <input type="email" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Phone Number</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Age</label>
                                    <input type="number" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">NIC Number</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                {userRole === 'MEMBER' && (
                                    <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                        <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">User Type</label>
                                        <div className="flex space-x-6 sm:col-span-2">
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="userType" className="text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
                                                <span className="text-sm text-gray-700">Student</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="userType" className="text-blue-600 border-gray-300 focus:ring-blue-500" />
                                                <span className="text-sm text-gray-700">Lecturer</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="radio" name="userType" className="text-blue-600 border-gray-300 focus:ring-blue-500" />
                                                <span className="text-sm text-gray-700">Staff</span>
                                            </label>
                                        </div>
                                    </div>
                                )}
                                <div className="flex justify-end pt-4 border-t">
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition">Save User</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Update User Section */}
                    {activeTab === 'UPDATE' && (
                        <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-900">Update User</h3>
                            {/* BACKEND: PUT /api/users/{id} */}
                            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Find User By</label>
                                    <div className="flex gap-2 sm:col-span-2">
                                        <div className="flex flex-1 bg-gray-100 border-none rounded-md focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden px-3 py-2 items-center">
                                            <span className="text-gray-500 text-sm font-medium mr-2">User ID:</span>
                                            <input type="text" placeholder="Enter User ID..." className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm" />
                                        </div>
                                        <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition text-sm font-medium whitespace-nowrap">Find User</button>
                                    </div>
                                </div>

                                <div className="border-t pt-4 mt-6">
                                    <h4 className="text-sm font-bold text-gray-700 mb-4">User Details</h4>
                                    <div className="space-y-4">
                                        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                            <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Role</label>
                                            <div className="flex flex-1 bg-gray-100 border-none rounded-md focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden sm:col-span-2">
                                                <select className="bg-transparent text-gray-700 border-none focus:ring-0 text-sm py-2 pl-3 pr-7 cursor-pointer w-full">
                                                    <option>Member</option>
                                                    <option>Guest</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                            <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Full Name</label>
                                            <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                        </div>
                                        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                            <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Address</label>
                                            <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                        </div>
                                        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                            <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Email</label>
                                            <input type="email" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                        </div>
                                        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                            <label className="pr-4 text-sm font-medium text-gray-900 sm:text-right">Phone Number</label>
                                            <input type="text" className="block w-full px-3 py-2 bg-gray-100 border-none rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-4 border-t">
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition">Update User</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Delete User Section */}
                    {activeTab === 'DELETE' && (
                        <div>
                            <h3 className="mb-6 text-xl font-bold text-gray-900">Delete User</h3>
                            {/* BACKEND: DELETE /api/users/{id} */}
                        </div>
                    )}

                </div>
            </div>
        </AdminLayout>
    );
};

export default ManageUsers;
