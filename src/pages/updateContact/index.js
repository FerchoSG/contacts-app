import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import useUser from 'hooks/useUser';
import Spinner from 'components/Spinner';
import useContacts from 'hooks/useContacts';

const UpdateContact = ({params}) => {
    let {id} = params
    const {getOneContact, singleContact, updateContact } = useContacts()
    const [alert, setAlert] = useState(false)
    const {user} = useUser()

    if(alert){
        setTimeout(() => {
            setAlert(false)
        }, 2000);
    }

    useEffect(function(){
        getOneContact({id})
    },[id, getOneContact])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const contact = {
            firstName: e.target['firstName'].value,
            lastName: e.target['lastName'].value,
            email: e.target['email'].value,
            contactNumber: e.target['contactNumber'].value,
            user_id: user.id
        }

        updateContact({id, contact})
        e.target.reset()
        setAlert(true)
    }

    return (
       <>
            <div className="container col-lg-6 mt-4">
                <div className="card">
                    <div className="card-header bg-warning d-flex justify-content-between align-items-center">
                        <Link to={`/detail/${id}`} className="btn btn-outline-secondary">
                            <ArrowBackIcon className="text-dark" style={{cursor: "pointer"}} />
                        </Link>
                        <h3 className="text-dark">Update Contact</h3>
                    </div>
                {
                    singleContact ?
                    <form className="card-body  text-dark" onSubmit={handleSubmit}>
                        {alert ?
                            <div className="alert alert-success d-flex justify-content-between align-items-center" 
                            role="alert">
                                <span>Contact updated</span> 
                                <button className="btn btn-sm" onClick={()=> setAlert(false)} >X</button>
                            </div> : ''
                        }
                        <div className="form-group">
                            <label htmlFor="firstName" className="float-left">First Name: </label>
                            <input 
                                type="text" className="form-control" 
                                name="firstName" placeholder={singleContact.firstName} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="float-left">Last Name: </label>
                            <input 
                                type="text" className="form-control" 
                                name="lastName" placeholder={singleContact.lastName} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="float-left">Email: </label>
                            <input 
                                type="email" className="form-control" 
                                name="email" placeholder={singleContact.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNumber" className="float-left">Contact Number: </label>
                            <input 
                                type="text" className="form-control" 
                                name="contactNumber" placeholder={singleContact.contactNumber}
                            />
                        </div>
                        <button className="btn btn-outline-info float-left">
                            <EditIcon className="mr-1" />
                            <span>Edit Contact</span>
                        </button>
                    </form>
                    : 
                    <div className="d-flex justify-content-center align-items-center"
                        style={{minHeight: "60vh"}}>
                        <Spinner color="#0333" />
                    </div>
                }
                </div>
            </div>
       </>
    );
}

export default UpdateContact;