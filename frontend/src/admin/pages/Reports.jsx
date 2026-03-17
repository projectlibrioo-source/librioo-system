import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const Reports = () => {
    const [reportType, setReportType] = useState('Library Managing Reports');
    const [searchField, setSearchField] = useState('Date');

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Reports</h2>
                    <p className="text-sm text-gray-500 mt-1">Admin / Reports</p>
                </div>

                {/* Usage Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-center items-center">
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">Total Loans</p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">1,234</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-center items-center">
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">System Uptime</p>
                    <p className="text-3xl font-bold text-green-500 mt-2">99.9%</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-center items-center">
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">Revenue</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">LKR 2,500</p>
                </div>
            </div>