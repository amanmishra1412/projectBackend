import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                setUser,
                setLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
