import React from "react";
import {HomeOutlined, ExitToApp} from '@material-ui/icons';
import { Link } from "wouter";


// import "./Header.css";
import useUser from "../../hooks/useUser";

export default function Header() {
    const {isLogged, logout, user} = useUser() 

    return (
        <header className="navbar navbar-expand-lg navbar-darkd-flex justify-content-between">
            <div>
                <h3 className="navbar-brand" >
                    <Link to="/" className="text-light" style={{textDecoration: "none", cursor: "pointer"}}>
                        <HomeOutlined style={{cursor: "pointer"}} />
                    </Link>
                </h3>
                <Link to="/profile" className="navbar-link text-light" style={{textDecoration: "none"}} > 
                    {isLogged ? `${user?.username} profile` : ''} 
                </Link>
            </div>
            {
                isLogged
                ? <Link className="text-light" to="/" onClick={logout}>
                        <ExitToApp style={{cursor: "pointer"}} />
                </Link>
                : <Link className="text-light" to="/login">Login</Link>
            }
        </header>
    );
}
