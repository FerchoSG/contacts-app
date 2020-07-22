import React from 'react';
import { Link } from 'wouter';
import useContacts from 'hooks/useContacts';

const Contact = ({contact, setHasDeletedContact}) => {

    const {deleteContact} = useContacts()

    // eslint-disable-next-line
    function handleDelete(e){
        e.preventDefault()
        deleteContact({contactId: contact.id})
        setHasDeletedContact(true)
    }

    return (
        <tr>
            <th> {`${contact.firstName} ${contact.lastName}`} </th>
            <td>
                <Link className="btn btn-sm btn-info"
                    to={`/detail/${contact.id}`} >
                    More Details
                </Link>
            </td>
        </tr>
    );
}

export default Contact;