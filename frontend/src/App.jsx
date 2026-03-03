import React from "react";
import AppRoutes from "./AppRoutes";
import "./features/shared/global.scss";
import AuthProvider from "./features/auth/AuthProvider";
import { PostProvider } from "./features/post/post.context";

const App = () => {
    return (
        <AuthProvider>
            <PostProvider>
                <AppRoutes />
            </PostProvider>
        </AuthProvider>
    );
};

export default App;
