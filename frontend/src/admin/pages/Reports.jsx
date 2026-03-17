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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Report Builder */}
                <div className="lg:col-span-1 border border-gray-200 rounded-lg shadow-sm bg-white p-6 h-fit">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Report Builder</h3>
                    <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Report Focus</label>
                            <select
                                value={reportType}
                                onChange={(e) => setReportType(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                            >
                                <option>Library Managing Reports</option>
                                <option>System Reports (Technical)</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input type="date" className="p-2 border rounded-md" />
                            <input type="date" className="p-2 border rounded-md" />
                        </div>

                        {reportType === 'Library Managing Reports' && (
                            <select className="p-2 border rounded-md">
                                <option>All Categories</option>
                                <option>Fiction</option>
                                <option>Science</option>
                            </select>
                        )}

                        {reportType === 'System Reports (Technical)' && (
                            <>
                                <select className="p-2 border rounded-md">
                                    <option>All Robots</option>
                                    <option>Robot Alpha</option>
                                </select>
                                <select className="p-2 border rounded-md">
                                    <option>Distance Traveled</option>
                                    <option>Error Events</option>
                                </select>
                            </>
                        )}

                        <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                            Generate Report
                        </button>
                    </form>
            </div>


            {/* Preview Table Container */}
<div className="lg:col-span-2 space-y-6">
    
    <div className="p-6 bg-white border rounded-lg shadow-sm">
        <h3 className="text-xl font-bold">
            Preview: {reportType}
        </h3>

        {/* Search */}
        <input
            type="text"
            placeholder={`Search by ${searchField}`}
            className="border p-2 rounded-md w-full"
        />

        {/* Table */}
        <table className="min-w-full text-sm mt-4">
            <thead>
                {reportType === 'Library Managing Reports' ? (
                    <tr>
                        <th>Date</th>
                        <th>Patrons</th>
                        <th>Loans</th>
                        <th>Overdues</th>
                    </tr>
                ) : (
                    <tr>
                        <th>Date</th>
                        <th>Robot ID</th>
                        <th>Events</th>
                        <th>Battery</th>
                    </tr>
                )}
            </thead>
        </table>
    </div>

    {/* Popular Items */}
    {reportType === 'Library Managing Reports' && (
        <div className="p-6 bg-white border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold">Popular Items</h3>
        </div>
    )}
</div>

</div> {/* grid */}
</div> {/* container */}
</AdminLayout>
);
};

export default Reports;