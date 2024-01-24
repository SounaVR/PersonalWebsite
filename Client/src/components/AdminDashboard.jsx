import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard = () => {
    const { authData } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        document.title = "Administration Panel";
        
        const verifyToken = async () => {
            try {
                const response = await fetch('https://localhost:5000/api/verify-token', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${authData.token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsAdmin(data);
                } else {
                    setIsAdmin(false);
                }
            } catch (error) {
                console.error('Error verifying token:', error);
                setIsAdmin(false);
            }
        };

        if (authData.token) {
            verifyToken();
        }
    }, [authData.token]);

    if (isAdmin) {
        return (
            <h2>Admin Panel</h2>
        );
    } else {
        return <div>Access denied. You need admin privileges to view this page.</div>;
    }    
};

export default AdminDashboard;