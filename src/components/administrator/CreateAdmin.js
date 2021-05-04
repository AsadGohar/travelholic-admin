import React, { useState } from 'react'
import axios from "../support-components/axios"

const CreateAdmin = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerAdmin = async (e) => {
        e.preventDefault()
        await axios.post('/admin', { name, username, password })
        setName('')
        setUsername('')
        setPassword('')
        alert('New Admin Added')
    }

    return (
        <div>
            <h5 className="mt-2">Register new admin</h5>
            <div className="row mb-5 mt-3">

                <div className="col-4">
                    <form onSubmit={registerAdmin}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={name}
                                onChange={(e) => setName(e.target.value)} placeholder="Admin Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" value={username}
                                onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>

                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAdmin
