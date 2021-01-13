import React from 'react';
import './App.css';

import { UserContextProvider } from './context/UserContext';

import Routes from 'Routes';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
    </div>
  );
}

export default App;
