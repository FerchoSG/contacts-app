import React from 'react'
import 'styles/Admin.css'

import ProfileIcon from '@material-ui/icons/AccountBoxOutlined';
import ContactsIcon from '@material-ui/icons/ContactsOutlined';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import SettingsIcon from '@material-ui/icons/Settings';

import { NavLink } from 'react-router-dom'



export default function(){
    return (
        <div className="Sidebar">
            <div className="Sidebar__header">
                Kira
            </div>
            {/* <div> */}
                <div className="Sidebar-items">
                    <NavLink activeClassName="Sidebar-item-active" 
                            // activeStyle={{backgroundColor: 'tomato'}}
                            to="/contacts" className="Sidebar-item" >
                        <p>Contacts</p>
                        <ContactsIcon/>
                    </NavLink>
                    <NavLink
                        // activeStyle={{backgroundColor: 'tomato'}} 
                        activeClassName="Sidebar-item-active" 
                        to="/chat" className="Sidebar-item" >
                        <p>Chat</p>
                        <ChatIcon/>
                    </NavLink>
                    <NavLink activeClassName="Sidebar-item-active" to="/profile" className="Sidebar-item" >
                        <p>Profile</p>
                        <ProfileIcon/>
                    </NavLink>
                    <NavLink activeClassName="Sidebar-item-active" to="/settings" className="Sidebar-item" >
                        <p>Settings</p>
                        <SettingsIcon/>
                    </NavLink>
                </div>
            {/* </div> */}
            <div></div>
        </div>
    )
}