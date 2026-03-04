import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/post/pages/Feed";
import CreatePost from "./features/post/pages/CreatePost";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;