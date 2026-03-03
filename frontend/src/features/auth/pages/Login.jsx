import React, { useState } from "react";
import "../style/style.scss";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return <h1>Loading..</h1>;
    }

    const handleForm = async (e) => {
        e.preventDefault();

        await handleLogin(username, password);
        navigate("/");
    };

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form
                    onSubmit={(e) => {
                        handleForm(e);
                    }}
                >
                    <input
                        value={username}
                        onInput={(e) => {
                            setUsername(e.target.value);
                        }}
                        type="text"
                        placeholder="Enter Username"
                    />
                    <input
                        value={password}
                        onInput={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Enter password"
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
                <p>
                    Don't Have Account?{" "}
                    <Link className="toggleAuth" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Login;
