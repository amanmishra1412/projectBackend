import { createContext, useState } from "react";
import { login, register } from "./services/auth.api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (username, password) => {
        setLoading(true);
        try {
            const res = await login(username, password);
            setUser(res);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    const handleRegister = async (username, email, password) => {
        setLoading(true);
        try {
            const res = await register(username, email, password);
            setUser(res);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, loading, handleLogin, handleRegister }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;