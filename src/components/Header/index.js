import React from "react";
import { Link } from "wouter";


// import "./Header.css";
import useUser from "../../hooks/useUser";

export default function Header() {
    const {isLogged, logout, user} = useUser() 

    return (
        <header className="navbar navbar-expand-lg navbar-darkd-flex justify-content-between">
            <div>
                <h3 className="navbar-brand" >
                    <Link to="/" className="text-light" style={{textDecoration: "none"}}>Contacts App</Link>
                </h3>
                <Link to="/profile" className="navbar-link text-light" style={{textDecoration: "none"}} > 
                    {isLogged ? `${user?.username} profile` : ''} 
                </Link>
            </div>
            {
                isLogged
                ? <Link className="text-light" to="/" onClick={logout}>Logout</Link>
                : <Link className="text-light" to="/login">Login</Link>
            }
        </header>
    );
}
