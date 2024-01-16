import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(() => {
        const storedToken = localStorage.getItem('token');
        const decodedToken = storedToken ? jwtDecode(storedToken) : null;
        return { token: storedToken, role: decodedToken ? decodedToken.role : null };
    });

    useEffect(() => {
        if (authData.token) {
            localStorage.setItem('token', authData.token);
        } else {
            localStorage.removeItem('token');
        }
    }, [authData]);

    const login = (token) => {
        const decodedToken = token ? jwtDecode(token) : null;
        setAuthData({ token, role: decodedToken ? decodedToken.role : null });
    };

    const logout = () => {
        setAuthData({ token: null, role: null });
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};