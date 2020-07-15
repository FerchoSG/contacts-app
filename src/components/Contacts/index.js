import React from 'react';
import { Link } from 'wouter';
import useContacts from 'hooks/useContacts';

const Contact = ({id, firstName, lastName, email, contactNumber}) => {

    const {deleteContact} = useContacts()

    return (
        <tr>
            <th> {`${firstName} ${lastName}`} </th>
            <td> {email} </td>
            <td> {contactNumber} </td>
            <td>
                <Link className="btn btn-sm btn-info"
                    to={`/update/${id}`} >
                    Update
                </Link>
                <button 
                    className="btn btn-sm btn-danger ml-2" 
                    onClick={()=> deleteContact({contactId: id})} >
                    Delete
                </button>
            </td>
        </tr>
        // <div 
        // className="card d-flex flex-row p-0 text-dark col-lg-4 col-md-6"
        // style={{cursor: "pointer"}} >
        //     <button style={{position: "absolute", right: 0, top: 0, fontWeight: "bolder"}}
        //     className="btn btn-danger btn-sm rounded-left" >
        //         X
        //     </button>
        //     <h5 className="card-header bg-info d-flex justify-content-center align-items-center " 
        //     style={{maxWidth: "35%"}} >
        //         { `${firstName} ${lastName}`}
        //     </h5>
        //     <div className="card-body">
        //         <p className="card-text"> {contactNumber} </p>
        //         <p className="card-text"> {email} </p>
        //     </div>
            
        // </div>
    );
}

export default Contact;