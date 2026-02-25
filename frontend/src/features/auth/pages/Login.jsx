import React from "react";
import "../style/style.scss";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Enter Username" />
                    <input type="password" placeholder="Enter password" />
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
