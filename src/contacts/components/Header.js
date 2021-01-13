import React from 'react'

export default function () {

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
               <button class="btn add-contact"> Add Contact</button>
           </div>
        </div>
    )
}