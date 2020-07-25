import React, {useState} from 'react';
import useUser from 'hooks/useUser';


const Register = () => {
    // eslint-disable-next-line
    const [user, setUser] = useState('')
    const {register} = useUser()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newUser = {
            name: e.target['name'].value,
            username: e.target['username'].value,
            email: e.target['email'].value,
            password: e.target['password'].value
        }

        register({user: newUser})
    }
    return (
        <div className="container col-lg-8">
            <form className="card bg-light text-dark" onSubmit={handleSubmit}>
                <h2 className="card-header bg-dark text-light">Register</h2>
                <div className="p-3">
                    <div className="form-group">
                        <label htmlFor="name" className="float-left">Name: </label>
                        <input 
                            type="text" name="name" 
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username" className="float-left">Username: </label>
                        <input 
                            type="text" name="username" 
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="float-left">Email: </label>
                        <input 
                            type="email" name="email" 
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="float-left">Password: </label>
                        <input 
                            type="password" name="password" 
                            className="form-control"
                        />
                    </div>
                    <button 
                        className="btn btn-block btn-lg btn-success" 
                        type="submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;