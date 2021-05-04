import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT, IS_ADMIN_LOGGED_IN } from "../constants/adminConstants"

export const adminLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return { loading: true }

        case ADMIN_LOGIN_SUCCESS:
            return { loading: false, adminInfo: action.payload }

        case ADMIN_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case ADMIN_LOGOUT:
            return {}

        default:
            return state
    }
}

export const isLoggedInReducer = (state = { isLoggedIn: false }, action) => {
    switch (action.type) {
        case IS_ADMIN_LOGGED_IN:
            return { isLoggedIn: action.payload }

        default:
            return state
    }
}