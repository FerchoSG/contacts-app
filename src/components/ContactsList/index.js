import React from 'react';
import Contact from 'components/Contacts';

const ContactList = ({contacts}) => {

    return (
        <>    
            <table className="table table-info container col-lg-8">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    contacts.map((singleContact, index) =>
                        <Contact 
                            contact={singleContact}
                            key={index}
                        />
                    )
                }
                </tbody>
            </table>
        
        </>
    );
}

export default ContactList;