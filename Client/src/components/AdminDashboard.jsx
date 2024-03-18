import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Hidden from './Admin/hidden';

import '../css/Admin.css';

const AdminDashboard = () => {
    const { authData } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        document.title = "Administration Panel";

        const verifyToken = async () => {
            try {
                const response = await fetch('https://souna.lexod.fr/api/verify-token', {
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
            <>
                <Hidden />
            </>
        );
    } else {
        return <div>Access denied. You need admin privileges to view this page.</div>;
    }
};

export default AdminDashboard;