import { DELETE_TOKEN } from "../actions/login.action"
import { GET_USER_INFO, UPDATE_USER_INFO } from "../actions/user.action"

const initialState = {}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return action.payload
        case UPDATE_USER_INFO:
            return action.payload
        case DELETE_TOKEN:
            return initialState
        default:
            return state
    }
}