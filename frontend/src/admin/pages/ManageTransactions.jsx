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
                        
                    </div>

                                        
                </div>
            </div>
        </AdminLayout>
    );
};

export default ManageTransactions;
