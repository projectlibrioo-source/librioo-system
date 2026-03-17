import React, { useState } from 'react';
import { Upload, Trash2, Wrench } from 'lucide-react';
import AdminLayout from '../layouts/AdminLayout';

const ManageRobot = () => {
    const [activeTab, setActiveTab] = useState('ADD');

    return (
        <AdminLayout>

             <div className="min-h-full p-8 space-y-12 font-sans bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900">Manage Robot</h2>

            </div>

        </AdminLayout>

    );
};