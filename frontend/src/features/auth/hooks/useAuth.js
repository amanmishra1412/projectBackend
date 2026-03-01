import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { login, register } from "./services/auth.api";

const useAuth = () => {
    const context = useContext(AuthContext);

    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async (username, password) => {
        setLoading(true);
        try {
            const res = await login(username, password);
            setUser(res.userData);
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
            setUser(res.userData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        loading,
        handleLogin,
        handleRegister,
    };
};

export default useAuth;