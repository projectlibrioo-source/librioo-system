import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';

const ManageTransactions = () => {
    const [activeTab, setActiveTab] = useState('BORROW');

    return (
        <AdminLayout>
            <div className="min-h-full p-8 space-y-8 font-sans bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900">Manage Transactions</h2>

                <div className="max-w-4xl p-8 mx-auto bg-white border border-gray-200 shadow-sm rounded-xl">
                    <div className="flex space-x-4 mb-6 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('BORROW')}
                            className={`pb-2 px-1 ${activeTab === 'BORROW' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            BORROW
                        </button>

                        <button
                            onClick={() => setActiveTab('RETURN')}
                            className={`pb-2 px-1 ${activeTab === 'RETURN' ? 'border-b-2 border-blue-600 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            RETURN
                        </button>
                        
                    </div>

                    {activeTab === 'BORROW' && (
                        <form onSubmit={e => e.preventDefault()}>
                            {/* BACKEND: POST /api/transactions/borrow */}
                            <div className="mb-8">
                                <h3 className="pb-2 mb-6 text-xl font-bold text-gray-900 border-b">Member Details</h3>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Find User By</label>
                                    <div className="flex gap-2 sm:col-span-2">
                                        <div className="flex flex-1 bg-gray-50 border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden px-3 py-2 items-center">
                                            <span className="text-gray-500 text-sm font-medium mr-2">User ID:</span>
                                            <input type="text" placeholder="Enter User ID..." className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm" />
                                        </div>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300 whitespace-nowrap">Verify</button>
                                    </div>
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Name</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" disabled />
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="pb-2 mb-6 text-xl font-bold text-gray-900 border-b">Book Details</h3>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Find Book By</label>
                                    <div className="flex gap-2 sm:col-span-2">
                                        <div className="flex flex-1 bg-gray-50 border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden px-3 py-2 items-center">
                                            <span className="text-gray-500 text-sm font-medium mr-2">Book ID / Barcode:</span>
                                            <input type="text" placeholder="Scan or enter Book ID..." className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm" />
                                        </div>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300 whitespace-nowrap">Verify</button>
                                    </div>
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Title</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" disabled />
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="pb-2 mb-6 text-xl font-bold text-gray-900 border-b">Transaction Summary</h3>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Borrow Date</label>
                                    <input type="date" className="block w-full px-3 py-2 text-gray-500 bg-gray-100 border border-gray-300 rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Expected Return Date</label>
                                    <input type="date" className="block w-full px-3 py-2 text-gray-500 bg-gray-100 border border-gray-300 rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Transaction ID</label>
                                    <div className="relative sm:col-span-2">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <Lock className="w-4 h-4 text-gray-400" />
                                        </span>
                                        <input type="text" className="block w-full py-2 pl-10 pr-3 font-mono text-gray-500 bg-gray-200 border border-gray-300 rounded-md" value="TR-AUTO-GEN" readOnly />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-4 border-t">
                                <button type="button" className="px-6 py-2 border rounded font-medium hover:bg-gray-50 transition mr-2">Clear Form</button>
                                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition">Confirm Borrow</button>
                            </div>
                        </form>
                    )}

                    {activeTab === 'RETURN' && (
                        <form onSubmit={e => e.preventDefault()}>
                            {/* BACKEND: POST /api/transactions/return */}
                            <div className="mb-8">
                                <h3 className="pb-2 mb-6 text-xl font-bold text-gray-900 border-b">Book Details</h3>
                                <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Find Book By</label>
                                    <div className="flex gap-2 sm:col-span-2">
                                        <div className="flex flex-1 bg-gray-50 border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden px-3 py-2 items-center">
                                            <span className="text-gray-500 text-sm font-medium mr-2">Book ID / Barcode:</span>
                                            <input type="text" placeholder="Scan or enter Book ID..." className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm" />
                                        </div>
                                        <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300 whitespace-nowrap">Look Up</button>
                                    </div>
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Borrowed By</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" disabled />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Overdue Days</label>
                                    <input type="number" className="block w-full px-3 py-2 bg-red-50 text-red-600 font-bold border border-red-200 rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" disabled value={0} />
                                </div>
                                <div className="grid items-center grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                                    <label className="pr-4 text-sm font-bold text-gray-900 sm:text-right">Fines Total</label>
                                    <input type="text" className="block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md sm:col-span-2 focus:ring-1 focus:ring-blue-500" disabled value="Rs. 0.00" />
                                </div>
                            </div>

                            <div className="flex justify-end pt-4 border-t">
                                <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded font-medium hover:bg-green-700 transition">Complete Return</button>
                            </div>
                        </form>
                    )}


                    
                </div>
            </div>
        </AdminLayout>
    );
};

export default ManageTransactions;
