import React, { useState } from 'react';
import { Upload, Trash2, Wrench } from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';

const ManageRobot = () => {
    const [activeTab, setActiveTab] = useState('ADD');

    return (
        <AdminLayout>

             <div className="min-h-full p-8 space-y-12 font-sans bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900">Manage Robot</h2>

                <div className="flex space-x-4 mb-6 border-b border-gray-200">
                    <button onClick={() => setActiveTab('ADD')}>
                        <Upload /> ADD
                    </button>
                    <button onClick={() => setActiveTab('UPDATE')}>
                        <Wrench /> MAINTENANCE
                    </button>
                    <button onClick={() => setActiveTab('DELETE')}>
                        <Trash2 /> DELETE
                    </button>
                </div>
            </div>

        </AdminLayout>

    );
};

export default ManageRobot;