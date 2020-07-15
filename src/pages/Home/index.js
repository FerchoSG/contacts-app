import React, { useEffect } from 'react';

import useUser from 'hooks/useUser';
import ContactList from 'components/ContactsList';
import useContacts from 'hooks/useContacts';
import { Link } from 'wouter';

const Home = () => {
    const {contacts, getContacts} = useContacts()
    const {user, isLogged} = useUser()

    useEffect(()=>{
        if(isLogged){
            getContacts({userId: user.id})
        }
    },[isLogged, getContacts])

    return (
        <div className="container pt-4">
            {
                isLogged && contacts
                ? 
                <div>
                    <h2>{user.username} Contacts</h2>
                    <ContactList contacts={contacts}/>
                    <Link className="btn rounded btn-success btn-lg" to="/add"
                          style={{position: "absolute", bottom: "2em", right: "1em"}} >
                        Add Contact
                    </Link>
                </div>
                : <h2>Home</h2>
            }
            
        </div>
    );
}

export default Home;