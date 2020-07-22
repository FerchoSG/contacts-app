import React from 'react';
import {Route, Switch} from 'wouter';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';

import { UserContextProvider } from './context/UserContext';

import './App.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import UpdateContact from 'pages/updateContact';
import AddContact from 'pages/addContact';
import Profile from 'pages/Profile/Index';
import Detail from 'pages/Detail';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header></Header>
        <Switch>
          <Route 
            component={Home}
            path="/"
          />
          <Route 
            component={Login}
            path="/login"
          />
          <Route 
            component={UpdateContact}
            path="/update/:id"
          />
          <Route 
            component={AddContact}
            path="/add"
          />
          <Route 
            component={Profile}
            path="/profile"
          />
          <Route 
            component={Detail}
            path="/detail/:id"
          />
        </Switch>
      </UserContextProvider>
    </div>
  );
}

export default App;
