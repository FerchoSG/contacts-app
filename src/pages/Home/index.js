import React from 'react';

import useUser from 'hooks/useUser';
import {Redirect, Route} from 'react-router-dom';

import Login from 'auth/Login'

const Home = () => {
    const {isLogged} = useUser()

    
    return (
        <div className="">
            <Route>
                {isLogged ? <Redirect to="/contacts" /> : <Login/>}
            </Route>
            
        </div>
    );
}

export default Home;