import React from 'react'

import Swal from 'sweetalert2';
export default function () {

    const addContact = () =>{
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    return (
        <div className="Contacts__header">
           <div className="Contact__header-options">
                <h4>Contacts</h4>
                <p>24 total</p>
                <div className="Contact__header-sort">
                    <p>Sort by</p>
                    <p>Date Created</p>
                </div>
           </div>
           <div>
               <button className="btn add-contact" onClick={addContact}> Add Contact</button>
           </div>
        </div>
    )
}