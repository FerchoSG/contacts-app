import React, { useEffect } from 'react';
import useContacts from 'hooks/useContacts';
import { Link } from 'wouter';

const UpdateContact = ({params}) => {
    const {getOneContact, singleContact, updateContact } = useContacts()

    useEffect(function(){
        getOneContact({id: params.id})
    },[params.id, getOneContact])

    const handleSubmit = (e)=>{
        e.preventDefault()
        const contact = {
            firstName: e.target['firstName'].value,
            lastName: e.target['lastName'].value,
            email: e.target['email'].value,
            contactNumber: e.target['contactNumber'].value,
            user_id: 1
        }

        // console.log(contact)
        updateContact({id: params.id, contact})
        e.target.reset()
    }

    return (
       <>
        {
            singleContact ?
            <div className="container col-8 mt-4">
                <div className="card">
                    <div className="card-header bg-warning d-flex justify-content-between align-items-center">
                        <h3 className="text-dark">Update Contact</h3>
                        <Link to="/" className="btn btn-outline-secondary">Go Back</Link>
                    </div>
                    <form className="card-body  text-dark" onSubmit={handleSubmit}>
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
                        <button className="btn btn-block btn-outline-info">Edit Contact</button>
                    </form>
                </div>
            </div>
            : ''
        }
       </>
    );
}

export default UpdateContact;