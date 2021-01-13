import React from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Home from 'pages/Home';
// import Login from 'auth/Login';
import Register from 'auth/Register';
// import Header from './components/Header';
import UpdateContact from 'pages/updateContact';
import AddContact from 'pages/addContact';
import Profile from 'pages/Profile/Index';
import Detail from 'pages/Detail';
import Contacts from 'pages/Contacts';
import Chat from 'pages/Chat';
import Settings from 'pages/Settings';

export default function(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/contacts">
            <Contacts/>
          </Route>
          <Route path="/chat">
            <Chat/>
          </Route>
          <Route path="/settings">
            <Settings/>
          </Route>
          <Route path="/signup">
            <Register/>
          </Route>
          <Route path="/update/:id">
            <UpdateContact/>
          </Route>
          <Route path="/add">
            <AddContact/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
        </Switch>
      </Router>
    )
}