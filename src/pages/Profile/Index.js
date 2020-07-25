import React, { useState } from 'react';
import useUser from 'hooks/useUser';
import { Link } from 'wouter';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EditIcon from '@material-ui/icons/Edit';

let editingStyles ={
    border: "none", 
    borderBottom: ".2px solid rgba(0,0,0,.4)"
    // boxShadow: "0 0 2px 2px rgba(0,0,0,.4)"
}

const Profile = () => {
    const [editing, setEditing] = useState(false)
    const {user, editProfile} = useUser()
    const [alert, setAlert] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        let editedProfile = {
            name: e.target['name'].value,
            username: e.target['username'].value,
            email: e.target['email'].value,
            password: e.target['password'].value,
        }
        
        editProfile({id: user.id, editedProfile});
        setAlert(true)
    }
    
    if(alert){
        setTimeout(() => {
            setAlert(false)
        }, 2000);
    }

    return (
        <div className="container col-lg-6 pt-2 ">
            <form className="card text-dark" onSubmit={handleSubmit} >
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h2 className="card-title">Profile</h2>
                    <Link className="btn btn-md btn-outline-dark" to="/">
                        <HomeOutlinedIcon style={{cursor: "pointer"}} />
                    </Link>
                </div>
                {
                    alert ?
                    <div className="m-2 alert alert-success d-flex justify-content-between align-items-center" 
                    role="alert">
                        <span>Profile Edited</span> 
                        <button className="btn btn-sm" onClick={()=> setAlert(false)} >X</button>
                    </div> : ''
                }
                <div className="card-body" style={{padding: ".8em 2em"}} >
                    <div className="form-group">
                        <label htmlFor="name" className="text-dark float-left">Name:</label>
                        <input style={editing ? {} : editingStyles} 
                               type="text" name="name" className="form-control" 
                               value={editing ? null : user?.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username" className="text-dark float-left">Username:</label>
                        <input style={editing ? {} : editingStyles} 
                               type="text" name="username" className="form-control" 
                               value={editing ? null : user?.username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-dark float-left">Email:</label>
                        <input style={editing ? {} : editingStyles} 
                               type="email" name="email"  className="form-control" 
                               value={editing ? null : user?.email}
                        />
                    </div>
                    { editing ?
                        <div className="form-group">
                            <label htmlFor="password" className="text-dark float-left">Password:</label>
                            <input type="password" name="password" className="form-control" value={editing ? null : ''}/>
                        </div> : ''
                    }

                </div>
                <div className="card-footer d-flex justify-content-between">
                    { editing ?
                        <button className="btn btn-outline-info btn-lg float-left" 
                                 >
                            <EditIcon />
                            Edit Profile
                        </button>
                      : 
                        <div 
                            className="btn btn-outline-warning btn-lg float-left" 
                             
                            onClick={()=> setEditing(true)} >
                            <EditIcon />
                            start Editting
                        </div>
                    }
                    { editing ?
                      <div className="btn btn-outline-warning btn-lg float-left" 
                       onClick={()=> setEditing(false)} >
                           <CancelOutlinedIcon />
                            Cancelar
                      </div>
                      : ''
                    }
                </div>
            </form>
        </div>
    );
}

export default Profile;