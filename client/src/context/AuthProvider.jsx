import React, { createContext, useState } from "react";
import { message } from 'antd'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialState={
        accessToken: localStorage.getItem('accessToken'),
        username:localStorage.getItem('username')
    }
    const [auth, setAuth] = useState( initialState )

    const login = (token, username) => {
        localStorage.setItem('accessToken', token);
        localStorage.setItem('username', username);
        setAuth({ accessToken: token, username });
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setAuth({});
        message.success('Logout successfully')
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;