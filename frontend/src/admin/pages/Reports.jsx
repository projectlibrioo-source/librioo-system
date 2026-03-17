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