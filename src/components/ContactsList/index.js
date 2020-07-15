import React from 'react';
import Contact from 'components/Contacts';

const ContactList = ({contacts, deleteContact}) => {
    // const [pageWidth, setPageWidth] = useState(0)

    return (
        <>
        { 
        
        <table className="table table-info">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map((singleContact, index) =>
                        <Contact 
                            id={singleContact.id}
                            firstName={singleContact.firstName}
                            lastName={singleContact.lastName}
                            email={singleContact.email}
                            contactNumber={singleContact.contactNumber}
                            key={index}
                        />
                    )
                }
            </tbody>
        </table>
        }
        </>
    );
}

export default ContactList;