import React, { useEffect, useState } from 'react';
import {AddCircle} from '@material-ui/icons';
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
            setLoading(false)
        }
        // eslint-disable-next-line
    },[isLogged, getContacts])
    
    return (
        <div className="container pt-4">
            {
                isLogged
                ?  
                    <div>
                        <div className="d-flex align-items-center justify-content-between col-lg-8 container mb-2">
                        <h2>{user.username} Contacts</h2>
                        <Link className="btn btn-outline-success" 
                            to="/add" >
                            <AddCircle className="text-success" style={{fontSize: "2.4em", cursor: "pointer"}} />
                        </Link>
                        </div>
                        { loading ?
                            <div className="d-flex justify-content-center align-items-center" 
                                style={{minHeight: "40vh"}}>
                                <Spinner color="#fff" />
                            </div> :
                            <ContactList contacts={contacts} />

                        }

                        
                    </div> 
                : <Register/>
            }
            
        </div>
    );
}

export default Home;