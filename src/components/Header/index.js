import React from "react";
import { Link } from "wouter";


// import "./Header.css";
import useUser from "../../hooks/useUser";

export default function Header() {
    const {isLogged, logout, user} = useUser() 

    return (
        <header className="navbar navbar-expand-lg navbar-darkd-flex justify-content-between">
            <h3><Link to="/" className="text-light" style={{textDecoration: "none"}} > 
                {isLogged ? `${user?.username} Profile` : 'Contact App'} 
            </Link></h3>
            {
                isLogged
                ? <Link className="text-light" to="/" onClick={logout}>Logout</Link>
                : <Link className="text-light" to="/login">Login</Link>
            }
        </header>
    );
}
