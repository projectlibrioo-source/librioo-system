import React, { useState } from 'react';
import { Upload, Trash2, Wrench } from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';

const ManageRobot = () => {
    const [activeTab, setActiveTab] = useState('ADD');

    return (
        <AdminLayout>

             <div className="min-h-full p-8 space-y-12 font-sans bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900">Manage Robot</h2>
                 <div className="max-w-5xl p-8 mx-auto space-y-8 bg-white border border-gray-200 shadow-sm rounded-xl">
                    <div className="flex space-x-4 mb-6 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('ADD')}
                            className={`pb-2 px-1 flex items-center gap-2 ${activeTab === 'ADD' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <Upload className="w-4 h-4" /> ADD
                        </button>
                        <button
                            onClick={() => setActiveTab('UPDATE')}
                            className={`pb-2 px-1 flex items-center gap-2 ${activeTab === 'UPDATE' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <Wrench className="w-4 h-4" /> MAINTENANCE
                        </button>
                        <button
                            onClick={() => setActiveTab('DELETE')}
                            className={`pb-2 px-1 flex items-center gap-2 ${activeTab === 'DELETE' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <Trash2 className="w-4 h-4" /> DELETE
                        </button>
                    </div>

                    {/* Add Robot */}
                    {activeTab === 'ADD' && (
                        <div>
                            <div className="flex items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Add Robot</h3>
                            </div>
                            <form className="space-y-4 max-w-2xl mb-8" onSubmit={e => e.preventDefault()}>
                                {/* BACKEND: POST /api/robots */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700">Robot ID</label>
                                        <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 1" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700">Robot Name</label>
                                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Robo-Helper" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                        <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700">Service Date</label>
                                        <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700">Part Replaced</label>
                                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Battery" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700">Status</label>
                                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 bg-white">
                                            <option>Active</option>
                                            <option>In Maintenance</option>
                                            <option>Retired</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition">Save Robot</button>
                            </form>

          

        </AdminLayout>

    );
};

export default ManageRobot;