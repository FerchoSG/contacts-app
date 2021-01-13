import React from 'react';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const Contact = ({contact}) => {

    return (
        <tr className="contact-list-item" >
            <td>
                <img 
                    src="https://www.w3schools.com/howto/img_avatar.png" 
                    alt="profile"
                    className="contact-img" 
                />
            </td>
            <td> 
                {`${contact.name} `} 
            </td>
            <td> {contact.phoneNumber} </td>
            <td> {contact.email} </td>
            <td> {contact.createdAt} </td>
            <td> <MoreVertIcon style={{cursor: 'pointer'}} /> </td>
        </tr>
    );
}

export default Contact;