import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { handleRegister, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return <h1>Loading..</h1>;
    }

    const handleForm = async (e) => {
        e.preventDefault();

        handleRegister(username, password).then((res) => {
            console.log(res);
            navigate("/login");
        });
    };

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
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
                        value={email}
                        onInput={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Enter Email"
                    />
                    <input
                        value={password}
                        onInput={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Enter password"
                    />
                    <button>Register</button>
                </form>
                <p>
                    Already Have Account{" "}
                    <Link className="toggleAuth" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Register;
