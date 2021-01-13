import React from 'react'
import 'styles/Admin.css'

// import {HomeOutlined, ExitToApp} from '@material-ui/icons';
// import { Link } from "wouter";

// import useUser from "hooks/useUser";

export default function() {

    // const {isLogged, logout, user} = useUser() 
    return (
        <header className="navBar">
            {/* <div>
                <h3 className="" >
                    <Link to="/" className="text-light">
                        <HomeOutlined style={{cursor: "pointer"}} />
                    </Link>
                </h3>
                <Link to="/profile" className="" > 
                    {isLogged ? `${user?.username} profile` : ''} 
                </Link>
            </div>
            {
                isLogged
                ? <Link className="text-light" to="/" onClick={logout}>
                        <ExitToApp style={{cursor: "pointer"}} />
                </Link>
                : <Link className="text-light" to="/login">Login</Link>
            } */}
        </header>
    )
}