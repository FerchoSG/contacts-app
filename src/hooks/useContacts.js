import {useState, useCallback} from 'react';
import contactsServise from '../services/contacts';

export default function useContacts(){
    const [contacts, setContacts] = useState([])
    const [singleContact, setSingleContact] = useState([])
    const [state, setState] = useState({loading: false,
        error: false})

    const getContacts = useCallback(({userId})=>{
        contactsServise.getAll({userId})
            .then(res =>{
                localStorage.setItem('contacts', JSON.stringify(res.data))
                setContacts(res.data)
            }).catch(err =>{
                console.log(err)
            })
    },[])

    const getOneContact = useCallback(({id})=>{
        contactsServise.getOne({id})
            .then(res =>{
                setSingleContact(res.data)
            }).catch(err =>{
                console.log(err)
            })
    },[])

    const updateContact = useCallback(({id, contact})=>{
        contactsServise.update({id, contact})
            .then(res =>{
                return res
            }).catch(err =>{
                console.log(err)
            })
    },[])

    const addContact = useCallback(({contact})=>{
        setState({loading: true, error: false})
        contactsServise.add({contact})
            .then(res =>{
                setState({loading: false, error: false})
                return res
            }).catch(err =>{
                setState({loading: true, error: true})
            })
    },[])

    const deleteContact = useCallback(({contactId}) =>{
        contactsServise.delete({contactId})
            .then(res =>{   
                return true
            }).catch(err =>{
                console.log(err)
            })
    }, [])

    return {
        contacts,
        singleContact,
        state,
        addContact,
        getContacts,
        getOneContact,
        updateContact,
        deleteContact,
    }
}