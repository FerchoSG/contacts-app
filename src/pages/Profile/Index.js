import React, { useState } from 'react';
import useUser from 'hooks/useUser';
import { Link } from 'wouter';

const Profile = () => {
    const [editing, setEditing] = useState(false)
    const {user} = useUser()
    return (
        <div className="container pt-4">
            <div className="card text-dark">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2 className="card-title">Profile</h2>
                    <Link className="btn btn-md btn-outline-dark" to="/">Home</Link>
                </div>
                <div className="card-body" style={{padding: ".8em 4em"}} >
                    <div className="form-group">
                        <label htmlFor="name" className="text-dark float-left">Name:</label>
                        <input type="text" name="name" className="form-control" value={user?.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username" className="text-dark float-left">Username:</label>
                        <input type="text" name="username" className="form-control" value={user?.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-dark float-left">Email:</label>
                        <input type="email" name="email"  className="form-control" value={user?.email}/>
                    </div>
                    { editing ?
                        <div className="form-group">
                            <label htmlFor="password" className="text-dark float-left">Email:</label>
                            <input type="password" name="password" className="form-control" value={user?.email}/>
                        </div> : ''
                    }

                </div>
                <div className="card-footer">
                    <button 
                        className="btn btn-outline-warning btn-lg float-left" 
                        style={{padding: ".1em 3em"}} 
                        onClick={()=> setEditing(true)} >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;