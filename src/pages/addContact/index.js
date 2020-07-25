import React, {useState} from 'react';
import { Link } from 'wouter';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIosSharp';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
// import AddIcon from '@material-ui/icons/Add';
import AddIcon from '@material-ui/icons/AddCircleOutlineOutlined';

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
        <div className="container col-lg-6 mt-4">
                <div className="card">
                    <div className="card-header bg-info d-flex justify-content-between align-items-center">
                        <Link to="/" >
                            <ArrowBackIcon className="border border-dark text-dark"/>
                        </Link>
                        <h3 className="text-dark">Add Contact</h3>
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
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-outline-success">
                                <AddIcon />
                                <span >Add Contact</span>
                            </button>
                            <Link to="/" className="btn btn-outline-warning">
                                <CancelOutlinedIcon />
                                <span >Cancel</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default AddContact;