import { GET_USER_INFO, USER_LOGIN } from "../actions/user.action";

const initialState = []

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload
        case GET_USER_INFO:
            return action.payload
        default:
            return state
    }
}