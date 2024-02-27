import { DELETE_TOKEN, GET_TOKEN } from "../actions/login.action"

const initialState = {}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN:
            return action.payload
        case DELETE_TOKEN:
            return action.payload
        default:
            return state
    }
}