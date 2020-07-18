import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

import useUser from '../../hooks/useUser';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const {isLogged, login, isLoginLoading, hasLoginError} = useUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        login({username, password})
    }

    useEffect(function(){
        if (isLogged) navigate('/')
    },[isLogged, navigate])

    return (
        <div className="container col-6 border border-light rounded mt-4 p-4">
           <div className="mt-4">
                <h2>Login</h2>
                    { isLoginLoading 
                    && <strong>Checking credentials...</strong>
                    }
                    {!isLoginLoading &&
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username" className="float-left">Username: </label>
                                <input 
                                    type="text" name="username" 
                                    className="form-control"
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="float-left">Password: </label>
                                <input 
                                    type="password" name="password" 
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            <button 
                                className="btn btn-block btn-success" 
                                type="submit" onClick={handleSubmit}>
                                Login
                            </button>
                        </form>
                    }
                    {
                        hasLoginError && <strong>Credentials are invalid</strong>
                    }
           </div>
        </div>
    );
}

export default Login;