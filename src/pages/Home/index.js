import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';

import useUser from 'hooks/useUser';
import ContactList from 'components/ContactsList';
import useContacts from 'hooks/useContacts';
import Register from 'components/Register';

const Home = () => {
    const {contacts, getContacts} = useContacts()
    const {user, isLogged} = useUser()
    const [hasDeletedContact, setHasDeletedContact] = useState(false)

    useEffect(()=>{
        if(isLogged || hasDeletedContact){
            getContacts({userId: user.id})
            setHasDeletedContact(false)
        }
        // eslint-disable-next-line
    },[isLogged, getContacts, hasDeletedContact])

    return (
        <div className="container pt-4">
            {
                isLogged && contacts
                ? 
                <div>
                    <h2>{user.username} Contacts</h2>
                    <ContactList contacts={contacts} setHasDeletedContact={setHasDeletedContact}/>
                    <Link className="btn rounded btn-success btn-lg" to="/add"
                          style={{position: "absolute", bottom: "2em", right: "1em"}} >
                        Add Contact
                    </Link>
                </div>
                : <Register/>
            }
            
        </div>
    );
}

export default Home;