import axios from "../components/support-components/axios"
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT, IS_ADMIN_LOGGED_IN } from "../constants/adminConstants"

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/admin/login', { username, password }, config)
        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        await axios.get('/admin/logout')
        dispatch({ type: ADMIN_LOGOUT })

    } catch (err) {
        console.log(err.response.data.message);
    }
}


export const isLoggedIn = () => async (dispatch) => {
    const { data } = await axios.get('/admin/isloggedin')

    dispatch({
        type: IS_ADMIN_LOGGED_IN,
        payload: data
    })
}