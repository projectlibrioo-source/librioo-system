import React, { useState } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const Settings = () => {
    const [enableFines, setEnableFines] = useState(false);

    // BACKEND: Replace with real role check from JWT or authentication context
    const currentUserRole = 'SUPER_ADMIN'; // Options: 'SUPER_ADMIN', 'ADMIN'

    return (
        <AdminLayout>
            
            
        </AdminLayout>
    );
};

export default Settings;
