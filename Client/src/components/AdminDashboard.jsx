import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
    const { authData } = useAuth();

    const isAdmin = authData.role;

    // Just in case
    if (!isAdmin) {
        return <div>Access denied. You need admin privileges to view this page.</div>;
    }

    return (
        <h2>Admin Panel</h2>
    );
};

export default AdminDashboard;