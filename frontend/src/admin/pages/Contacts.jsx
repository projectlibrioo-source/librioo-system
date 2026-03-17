import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const Contact = () => {
    const [searchFilter, setSearchFilter] = useState('All');
    const [searchField, setSearchField] = useState('Name');

    const admins = [
        { id: 'A1001', name: 'Alice Walker', role: 'Super Admin', status: 'Active', phone: '+94 77 123 4567', email: 'alice.w@univ.edu', color: 'green' },
        { id: 'A1002', name: 'Bob Smith', role: 'Admin', status: 'Blocked', phone: '+94 71 234 5678', email: 'b.smith@univ.edu', color: 'red' },
        { id: 'A1003', name: 'Charlie Davis', role: 'Admin', status: 'Active', phone: '+94 76 345 6789', email: 'charlie.d@univ.edu', color: 'green' }
    ];

    const filteredAdmins = admins.filter(admin => {
        if (searchFilter === 'All') return true;
        if (searchFilter === 'Super Admin' && admin.role === 'Super Admin') return true;
        if (searchFilter === 'Admin' && admin.role === 'Admin') return true;
        return false;
    });

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <div className="mb-6 flex justify-between items-center flex-wrap gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Admins (Contact)</h2>
                        <p className="text-sm text-gray-500 mt-1">Admin / Admins List</p>
                    </div>

                    <a href="/admin/settings" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                        + Add New Admin
                    </a>
                </div>


                {/* Statistics */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-4 bg-white border rounded-lg shadow-sm flex items-center space-x-4">
        <div>
            <p className="text-sm text-gray-500 font-medium">Total Admins</p>
            <p className="text-2xl font-bold text-gray-900">3</p>
        </div>
    </div>

    <div className="p-4 bg-white border rounded-lg shadow-sm flex items-center space-x-4">
        <div>
            <p className="text-sm text-gray-500 font-medium">Active</p>
            <p className="text-2xl font-bold text-gray-900">2</p>
        </div>
    </div>

    <div className="p-4 bg-white border rounded-lg shadow-sm flex items-center space-x-4">
        <div>
            <p className="text-sm text-gray-500 font-medium">Blocked</p>
            <p className="text-2xl font-bold text-gray-900">1</p>
        </div>
    </div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm">

    <div className="p-4 border-b flex flex-col md:flex-row justify-between gap-4">
        <div className="flex w-full md:w-1/2 space-x-2">

            <select
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-1/3 p-2 border rounded-md"
            >
                <option value="All">All Roles</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Admin">Admin</option>
            </select>

            <div className="relative w-2/3 flex items-center border rounded-md">
                <select
                    value={searchField}
                    onChange={(e) => setSearchField(e.target.value)}
                    className="text-sm py-2 pl-3"
                >
                    <option value="Name">Name</option>
                    <option value="ID">ID</option>
                    <option value="Email">Email</option>
                </select>

                <input
                    type="text"
                    placeholder={`Search by ${searchField}...`}
                    className="w-full pl-3 py-2 text-sm"
                />
            </div>
        </div>

        <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border text-sm">Export CSV</button>
            <button className="px-3 py-2 border text-red-600 text-sm">Block</button>
            <button className="px-3 py-2 border text-green-600 text-sm">Unblock</button>
        </div>
    </div>

