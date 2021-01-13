import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import 'styles/Admin.css'

export default function({children}) {
    return (
        <div className="Admin">
            <Sidebar/>
            <div className="Admin__body">
                <Header/>
                {children}
            </div>
        </div>
    )
}