import React, { useState, useEffect } from 'react'

import { useLocation } from 'wouter';
import useUser from 'hooks/useUser';

import 'styles/Login.css';
import bg from 'img/bg-login.jpg'

const Register = () =>{
   // eslint-disable-next-line
//    const [user, setUser] = useState('')
   const [name, setName] = useState('')
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const {register, isLogged, isLoginLoading, hasLoginError} = useUser()
   const [,navigate] = useLocation()

   const handleSubmit = async (e) =>{
       e.preventDefault()
       const newUser = {
           name,
           username,
           email,
           password
       }

       const {error, message} = await register({user: newUser})
       if(error){
           alert(message)
       }else{
           alert(message)
           navigate('/login')
       }
   }
    const goToLogin = (e) => {
        e.preventDefault();
        navigate('/')
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
                    <form className="login__content" onSubmit={handleSubmit}>
                        <h2 className="login__title">Create an account</h2>
                            <div className="form-field">
                                <label htmlFor="name" >Name</label>
                                <input 
                                    className="form-input" 
                                    name="name" type="text" 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="username" >username</label>
                                <input 
                                    className="form-input" 
                                    name="username" type="text" 
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >email</label>
                                <input 
                                    className="form-input" 
                                    name="email" type="email" 
                                    onChange={(e) => setEmail(e.target.value)} 
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
                                    SignUp
                                </button>
                                <button className="btn register-btn" onClick={goToLogin}>
                                    Login
                                </button>
                        </div>
                    </form>
                    <img className="login__img" src={bg} alt="auth phone" />
                </div>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        
        </div>
    )
}

export default Register