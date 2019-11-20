import React, { useState } from 'react';
import axios from 'axios';


const OnBoarding = (props) => {
    const [error, setError] = useState();
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        email: ""
    });
    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('https://zero5nelsonm-lendr.herokuapp.com/createnewuser', {
                username: newUser.username,
                email: newUser.email,
                password: newUser.password
            })
            .then(response => {
                console.log(response)
                props.history.push('/dasboard')
            })
            .catch(error => {
                console.log(error.response)
            })
        localStorage.setItem('token')

    }
    console.log(newUser);
    return (
        <form onSubmit={handleSubmit}>
            <h2>Please Login</h2>
            <div className="login">
                {error && <div className="error">{error}</div>}
                <input type="text" name='username' placeholder="User Name" value={newUser.username} onChange={handleChange} />
                <input type="text" name='email' placeholder="Email" value={newUser.email} onChange={handleChange} />
                <input type='password' name='password' placeholder='password' value={newUser.password} onChange={handleChange} />
                <button className="button" type="submit">Sign In</button>
            </div>
        </form>
    )
}
export default OnBoarding;
