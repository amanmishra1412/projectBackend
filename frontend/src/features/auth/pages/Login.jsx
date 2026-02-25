import React, { useState } from "react";
import "../style/style.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:3000/api/auth/login",
                {
                    username,
                    password,
                },
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res);
            });
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
                    <button>Login</button>
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
