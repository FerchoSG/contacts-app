import React, { useState, useEffect } from 'react'

import { useLocation } from 'wouter';
import useUser from 'hooks/useUser';

import 'styles/Login.css';
import bg from 'img/bg-login.jpg'

const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const {isLogged, login, isLoginLoading, hasLoginError} = useUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        login({username, password})
    }

    const goToRegister = (e) => {
        console.log('to register')
        e.preventDefault();
        navigate('/signup')
    }

    useEffect(function(){
        if (isLogged) navigate('/')
    },[isLogged, navigate])

    return (
        <div className="login__container">
            { isLoginLoading 
                && <strong>Checking credentials...</strong>
            }
            { !isLoginLoading &&
                <div className="login">
                    <img className="login__img" src={bg} alt="auth phone" />
                    <form className="login__content" onSubmit={handleSubmit}>
                        <h2 className="login__title">Login</h2>
                            <div className="form-field">
                                <label htmlFor="username" >username</label>
                                <input 
                                    className="form-input" 
                                    name="username" type="text" 
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input 
                                    className="form-input"  
                                    type="password" name="password"
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                        <div className="form-btns">
                                <button className="btn login-btn" onClick={handleSubmit}>
                                    Login
                                </button>
                                <button className="btn register-btn" onClick={goToRegister}>
                                    Register
                                </button>
                        </div>
                    </form>
                </div>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        
        </div>
    )
}

export default Login