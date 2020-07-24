import React, {useState} from 'react';
import { Link } from 'wouter';

import useContacts from 'hooks/useContacts';
import useUser from 'hooks/useUser';

const AddContact = () => {

    const {addContact} = useContacts()
    const [alert, setAlert] = useState(false)
    const {user} = useUser()

    if(alert){
        setTimeout(() => {
            setAlert(false)
        }, 2000);
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const contact = {
            firstName: e.target['firstName'].value,
            lastName: e.target['lastName'].value,
            email: e.target['email'].value,
            contactNumber: e.target['contactNumber'].value,
            user_id: user.id
        }

        addContact({contact})
        // console.log(contact)
        e.target.reset()
        setAlert(true)
    }

    return (
        <div className="container col-lg-8 mt-4">
                <div className="card">
                    <div className="card-header bg-info d-flex justify-content-between align-items-center">
                        <h3 className="text-dark">Add Contact</h3>
                        <Link to="/" className="btn btn-outline-secondary">Go Back</Link>
                    </div>
                    <form className="card-body text-dark" onSubmit={handleSubmit}>
                        {
                            alert ?
                            <div className="alert alert-success d-flex justify-content-between align-items-center" 
                            role="alert">
                                <span>Contact added</span> 
                                <button className="btn btn-sm" onClick={()=> setAlert(false)} >X</button>
                            </div> : ''
                        }
                        <div className="form-group">
                            <label htmlFor="firstName" className="float-left">First Name: </label>
                            <input 
                                type="text" className="form-control" 
                                name="firstName"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="float-left">Last Name: </label>
                            <input 
                                type="text" className="form-control" 
                                name="lastName"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="float-left">Email: </label>
                            <input 
                                type="email" className="form-control" 
                                name="email" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNumber" className="float-left">Contact Number: </label>
                            <input 
                                type="text" className="form-control" 
                                name="contactNumber" 
                            />
                        </div>
                        <button className="btn btn-block btn-lg btn-outline-success">Add Contact</button>
                    </form>
                </div>
            </div>
    );
}

export default AddContact;