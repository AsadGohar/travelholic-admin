import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/adminActions'
import Spinner from 'react-bootstrap/Spinner'
import "./Login.css"

const Login = ({ history, location }) => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const adminLogin = useSelector(state => state.adminLogin)
    const { loading, error, adminInfo } = adminLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (adminInfo) {
            history.push(redirect)
        }
    }, [history, adminInfo, redirect])



    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

    return (
        <div className="container login-wrap">
            <div className="text-center">
                <img src="https://img.icons8.com/dotty/80/000000/admin-settings-male.png" />
                <h5 className="mt-2" >Are you an admin? Please Login to continue</h5>
            </div>
            <div className="row justify-content-center login-main-div mt-5">
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

                        <div className="text-center mt-1">
                            {!loading ? <button type="submit" className="btn btn-block signin-btn">Sign in</button> :
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            }
                            {error ? <p style={{color: 'red'}}>{error}</p> : null}
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;