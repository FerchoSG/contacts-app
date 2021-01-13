import React from 'react';
import Contact from './Contact';

const ContactList = ({contacts}) => {

    const test = [
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '135'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '13564655'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '135'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '13564655'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '135'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '13564655'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '135'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '13564655'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '135'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '13564655'},
        {id: 1, name: 'fernando', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '135'},
        {id: 1, name: 'Luis', phoneNumber: '51516561516',email: 'test@mail.com', createdAt: '13564655'},
    ]

    return (
        <div className="contacts">    
            <table className="contacts-table">
                <tbody>
                { test &&
                    test.map((singleContact, index) =>
                        <Contact 
                            contact={singleContact}
                            key={index}
                        />
                    )
                }
                </tbody>
            </table>
        
        </div>
    );
}

export default ContactList;