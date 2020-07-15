import React, {useState} from 'react';

const Context = React.createContext({})

export function UserContextProvider ({children}){
    const [jwt, setJWT] = useState(()=> JSON.parse(localStorage.getItem('jwt')))
    const [user, setUser] = useState(()=> JSON.parse(localStorage.getItem('user')))

    return <Context.Provider value={{jwt, setJWT, user, setUser}}>
        {children}
    </Context.Provider>
}

export default Context;