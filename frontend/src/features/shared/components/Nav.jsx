import React from "react";
import "../nav.scss";
import { useNavigate } from "react-router";

const Nav = () => {
    const navigate = useNavigate();

    return (
        <nav className="nav-bar">
            <h3>Instagram</h3>
            <button
                onClick={() => {
                    navigate("/create-post");
                }}
                className="btn btn-primary"
            >
                Create
            </button>
        </nav>
    );
};

export default Nav;
