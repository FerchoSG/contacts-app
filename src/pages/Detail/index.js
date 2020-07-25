import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

import UseContacts from 'hooks/useContacts';
import Spinner from 'components/Spinner';

const Detail = (props) => {
    let {id} = props.params
    const {getOneContact, singleContact} = UseContacts()
    const {deleteContact} = UseContacts()
    const [, navigate] = useLocation()

    useEffect(()=>{
        getOneContact({id})
    },[getOneContact, id])

    const handleDelete = (e)=>{
        e.preventDefault()
        let confirmation = window.confirm('Do you really want to delete this contact?')

        if(confirmation){
            if(deleteContact({contactId: id})){
                console.log('eliminado')
            }else{
                console.log('error')
            }
        }
        navigate('/')
    }
    return (
        <div className="card mt-3 container col-sm-6 col-md-8 col-lg-4 " style={{padding: "0"}} >
            <div className="card-header bg-info text-light d-flex justify-content-between">
                <h4>Contact Details</h4>
                <Link to="/" className="btn btn-sm btn-outline-light" style={{borderRadius: "8px"}} >
                    Home
                    </Link>
            </div>
            <div className="card-body text-dark">
                {
                    singleContact ?  
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="float-left">Name:</span>  
                        <span className="float-right">
                            {`${ singleContact ? singleContact.firstName :''} ${singleContact ? singleContact?.lastName : ''}`}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Email:</span>
                        <span className="float-right">
                            {singleContact?.email}
                        </span> 
                    </li>
                    <li className="list-group-item">
                        <span className="float-left">Phone Number:</span> 
                        <span className="float-right">
                            {singleContact?.contactNumber}
                        </span> 
                    </li>
                  </ul>
                  : <Spinner color="#0333"/> 
                }
            </div>
            <div className="card-footer d-flex justify-content-between">
                <Link className="btn btn-outline-danger btn-lg"
                    onClick={handleDelete}>
                    Delete
                </Link>
                <Link className="btn btn-outline-warning btn-lg" to={`/update/${id}`}>
                    Update
                </Link>
            </div>
        </div>
    );
}

export default Detail;