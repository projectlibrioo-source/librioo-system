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

                             <h4 className="font-bold text-gray-800 mb-2">Current Robots</h4>
                            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                {/* BACKEND: Fetch /api/robots list */}
                                <div className="grid grid-cols-4 border-b border-gray-200 bg-blue-100/50">
                                    <div className="p-4 font-bold text-center text-gray-800 border-r border-gray-200">Robot ID</div>
                                    <div className="p-4 font-bold text-center text-gray-800 border-r border-gray-200">Robot Name</div>
                                    <div className="p-4 font-bold text-center text-gray-800 border-r border-gray-200">Model</div>
                                    <div className="p-4 font-bold text-center text-gray-800">Shelf Location</div>
                                </div>
                                <div className="grid grid-cols-4 border-b border-gray-100">
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">R-001</div>
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">Robot Alpha</div>
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">MK-III</div>
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">Aisle 2</div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">R-002</div>
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">Robot Beta</div>
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">MK-IV</div>
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">Aisle 5</div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Robot Maintenance (Update) */}
                    {activeTab === 'UPDATE' && (
                        <div>
                            <div className="flex items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Robot Maintenance</h3>
                            </div>
                            <form className="space-y-4 max-w-2xl mb-8" onSubmit={e => e.preventDefault()}>
                                {/* BACKEND: PUT /api/robots/{id}/maintenance */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Find Robot By</label>
                                        <div className="flex rounded-md shadow-sm border border-gray-300 overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 bg-gray-50 px-3 py-2 items-center">
                                            <span className="text-gray-500 text-sm font-medium mr-2">ID:</span>
                                            <input type="text" className="flex-1 block w-full bg-transparent border-none focus:ring-0 p-0 text-sm" placeholder="Enter Robot ID..." />
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4 mt-6">
                                    <h4 className="text-sm font-bold text-gray-900 mb-4">Update Details</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block text-sm font-medium text-gray-700">Robot Name</label>
                                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 bg-white" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block text-sm font-medium text-gray-700">Status</label>
                                            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 bg-white">
                                                <option>Active</option>
                                                <option>In Maintenance</option>
                                                <option>Retired</option>
                                            </select>
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                            <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 bg-white" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block text-sm font-medium text-gray-700">Service Date</label>
                                            <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 bg-white" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block text-sm font-medium text-gray-700">Part(s) Replaced</label>
                                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500 bg-white" placeholder="e.g. Sensors, Battery" />
                                        </div>
                                    </div>
                                </div>
                                <button className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition">Update Log</button>
                            </form>

                            <h4 className="font-bold text-gray-800 mb-2">Service History</h4>
                            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                                {/* BACKEND: Fetch /api/robots/{id}/maintenance history */}
                                <div className="grid grid-cols-4 border-b border-gray-200 bg-blue-100/50">
                                    <div className="p-4 font-bold text-center text-gray-800 border-r border-gray-200">Last Service</div>
                                    <div className="p-4 font-bold text-center text-gray-800 border-r border-gray-200">Next Service</div>
                                    <div className="p-4 font-bold text-center text-gray-800 border-r border-gray-200">Parts Replaced</div>
                                    <div className="p-4 font-bold text-center text-gray-800">Notes from Technician</div>
                                </div>
                                <div className="grid grid-cols-4 border-b border-gray-100">
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">2023-09-01</div>
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">2024-03-01</div>
                                    <div className="p-4 text-center text-gray-600 border-r border-gray-200">Battery Pack</div>
                                    <div className="p-4 text-center text-gray-600">Routine check passed.</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Delete Robot */}
                    {activeTab === 'DELETE' && (
                        <div>
                            <div className="flex items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Delete Robot</h3>
                            </div>
                            {/* BACKEND: DELETE /api/robots/{id} */}
                            <form className="space-y-4 max-w-2xl" onSubmit={e => e.preventDefault()}>
                                <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                                    <div className="flex flex-col items-center gap-6 md:flex-row">
                                        <div className="flex-1 w-full space-y-4">
                                            <label className="block text-sm font-medium text-gray-700">Find Robot By</label>
                                            <div className="flex bg-white rounded border border-red-300 overflow-hidden focus-within:ring-1 focus-within:ring-red-500 transition-colors px-4 py-3 items-center">
                                                <span className="text-gray-500 font-bold mr-2">Robot ID:</span>
                                                <input type="text" placeholder="Required" className="w-full font-bold placeholder-gray-400 border-none focus:ring-0 p-0" />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-auto pt-4 md:pt-0">
                                            <button className="w-full md:w-48 h-full py-6 md:mt-5 bg-white text-red-600 font-bold rounded-lg border border-red-200 flex flex-col items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                                                <div className="flex items-center gap-2 text-lg">
                                                    <span className="text-xl">!</span>
                                                    DELETE
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                </div>
            </div>


          

        </AdminLayout>

    );
};

export default ManageRobot;