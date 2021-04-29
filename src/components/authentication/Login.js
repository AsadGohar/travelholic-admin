import React, { useEffect, useState } from 'react'
import axios from "../support-components/axios"
import "./Login.css"

const Login = ({ history, location, saveAdminInfo }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('/admin/login', { username, password })
            .then(res => {
                console.log(res.data)
                // localStorage.setItem('adminInfo', res.data)
                // history.push('/')
                // window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container login-wrap">
            <div className="row justify-content-center mt-5">

                <div className="form-wrap-div">
                    <h4 className="mb-3">Admin Login</h4>
                    <form onSubmit={submitHandler}>
                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-block signin-btn">Sign in</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;