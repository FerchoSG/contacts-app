import {useState, useCallback} from 'react';
import contactsServise from '../services/contacts';

export default function useContacts(){
    const [contacts, setContacts] = useState([])
    const [singleContact, setSingleContact] = useState(false)
    const [state, setState] = useState({loading: false,
        error: false})

    const getContacts = useCallback(({userId})=>{
        let contactsLS = JSON.parse(localStorage.getItem('contacts')) 
        if(contactsLS){
            setContacts(contactsLS)
            return true
        }else{
            contactsServise.getAll({userId})
                .then(res =>{
                    localStorage.setItem('contacts', JSON.stringify(res.data))
                    setContacts(res.data)
                    return true
                }).catch(err =>{
                    console.log(err)
                    return false
                })
        }
    },[])

    const getOneContact = useCallback(({id})=>{
        let contactsLS = JSON.parse(localStorage.getItem('contacts')) 
        if(contactsLS){
            let contactLS = contactsLS.filter(cont => cont.id === Number(id))
            setSingleContact(contactLS[0])
        }else{
            contactsServise.getOne({id})
                .then(res =>{
                    setSingleContact(res.data)
                    return true
                }).catch(err =>{
                    console.log(err)
                    return false
                })
        }
        
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
                return false
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