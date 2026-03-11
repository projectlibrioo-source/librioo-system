import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const Settings = () => {
    const [enableFines, setEnableFines] = useState(false);

    // BACKEND: Replace with real role check from JWT or authentication context
    const currentUserRole = 'SUPER_ADMIN'; // Options: 'SUPER_ADMIN', 'ADMIN'

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
                    <p className="text-sm text-gray-500 mt-1">Admin / Settings</p>
                </div>

                {currentUserRole === 'SUPER_ADMIN' ? (
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/* Circulation Rules Card */}
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-800">Circulation Rules</h3>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">Enable fines</span>
                                    <button
                                        onClick={() => setEnableFines(!enableFines)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${enableFines ? 'bg-blue-600' : 'bg-gray-300'}`}
                                    >
                                        <span className={`${enableFines ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2">Patron Type</th>
                                            <th className="px-4 py-2">Item Type</th>
                                            <th className="px-4 py-2">Fine Amount</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* BACKEND: Dummy Data for circulation rules */}
                                        <tr className="border-b">
                                            <td className="px-4 py-2">Student</td>
                                            <td className="px-4 py-2">Book</td>
                                            <td className="px-4 py-2">Rs. 50.00</td>
                                            <td className="px-4 py-2"><button className="text-blue-600 hover:underline">Edit</button></td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-2">Staff</td>
                                            <td className="px-4 py-2">Magazine</td>
                                            <td className="px-4 py-2">Rs. 10.00</td>
                                            <td className="px-4 py-2"><button className="text-blue-600 hover:underline">Edit</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Patron Categories Card */}
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Patron Categories</h3>
                            {/* BACKEND: Form submission to POST/PUT /api/categories */}
                            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Category</label>
                                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                                        <option>Student</option>
                                        <option>Staff</option>
                                        {/* Guest excluded — guests cannot borrow and therefore have no fines */}
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Max Loans</label>
                                        <input type="number" defaultValue={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Fine Rate (LKR)</label>
                                        <input type="number" step="0.5" defaultValue={0.50} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Save Category</button>
                            </form>
                        </div>

                        {/* Role-Based Section: Super Admin Only Settings */}
                        <div className="p-6 bg-white border border-blue-200 rounded-lg shadow-sm lg:col-span-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 px-3 py-1 rounded-bl-lg font-bold text-xs">SUPER ADMIN ONLY</div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Assign Admins & Super Admins</h3>
                                    <p className="text-sm text-gray-500">Only Super Admins can add or promote users to administrative roles.</p>
                                </div>
                            </div>

                            <form className="space-y-4 bg-gray-50 p-4 border border-gray-200 rounded-md" onSubmit={e => e.preventDefault()}>
                                {/* BACKEND: This form submits to POST /api/admins to create an admin account or assign role */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="email" placeholder="john@library.edu" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Assign Role</label>
                                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border">
                                            <option value="ADMIN">Admin</option>
                                            <option value="SUPER_ADMIN">Super Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Temporary Password</label>
                                    <input type="password" placeholder="Pass123!" className="mt-1 block w-full md:w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" />
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition shadow-sm mt-4">
                                    Create Account
                                </button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center py-12">
                        <div className="text-center">
                            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            <h3 className="text-lg font-bold text-gray-700">Access Restricted</h3>
                            <p className="text-sm text-gray-500">You must be a Super Admin to view and manage settings.</p>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default Settings;
