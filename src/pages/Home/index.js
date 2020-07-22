import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';

import useUser from 'hooks/useUser';
import ContactList from 'components/ContactsList';
import useContacts from 'hooks/useContacts';
import Register from 'components/Register';
import Spinner from 'components/Spinner';


import './Home.css';

const Home = () => {
    const {contacts, getContacts} = useContacts()
    const {user, isLogged} = useUser()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        if(isLogged){
            getContacts({userId: user.id})
        }
        if(contacts !== null){
            setLoading(false)
        }
        // eslint-disable-next-line
    },[isLogged, getContacts, contacts])
    
    return (
        <div className="container pt-4">
            {
                isLogged
                ?  
                    <div>
                        <h2>{user.username} Contacts</h2>
                        { loading ?
                            <div className="d-flex justify-content-center align-items-center" 
                                style={{minHeight: "40vh"}}>
                                <Spinner color="#fff" />
                            </div> :
                            <ContactList contacts={contacts} />

                        }

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