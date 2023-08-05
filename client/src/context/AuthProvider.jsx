import { createContext, useState } from "react";
import { message } from 'antd'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ accessToken: localStorage.getItem('accessToken') })

    const login = (token) => {
        localStorage.setItem('accessToken', token);
        setAuth({ accessToken: token });
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