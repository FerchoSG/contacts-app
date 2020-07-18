import { useContext, useCallback, useState } from "react";
import Context from "../context/UserContext";
import loginService from '../services/login';
import RegisterService from '../services/register';
import ProfileService from '../services/profile';

export default function useUser(){
    const {jwt, setJWT, user, setUser} = useContext(Context);
    const [state, setState] = useState({loading: false,
    error: false})
    
    const login = useCallback(({username, password})=>{
        setState({loading: true, error: false})
        loginService({username, password})
            .then(res => {
                const now = Date.now()
                const day = 60 * 60 * 24;

                const sessionObj = {
                    expiresAt: now + day,
                    token: res.token
                }
                localStorage.setItem('jwt', JSON.stringify(sessionObj))
                localStorage.setItem('user', JSON.stringify(res.user))

                setState({loading: false, error: false})
                setJWT(res.token)
                setUser(res.user)
            })
            .catch(err => {
                localStorage.removeItem('jwt')
                localStorage.removeItem('user')
                setState({loading: false, error: true})
                // alert(err)
            })
    },[setJWT, setUser])

    const register = useCallback(({user})=>{
        RegisterService({user})
        .then(res => {
            console.log('/*******************/',res)
            return res
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    const logout = useCallback(()=>{
        localStorage.removeItem('jwt')
        localStorage.removeItem('user')
        setJWT(null)
        setUser(null)
    },[setJWT, setUser])

    const editProfile = useCallback(({id, editedProfile})=>{
        ProfileService({id, editedProfile})
        .then(res => {
            return res
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login, 
        logout,
        register,
        editProfile,
        user
    }
}