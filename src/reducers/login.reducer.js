import { DELETE_TOKEN, GET_TOKEN, SET_ERROR_MESSAGE } from "../actions/login.action"

const initialState = {
    token: null,
    errorMessage: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN:
            return {...state, token: action.payload, errorMessage: null}
        case DELETE_TOKEN:
            return {...state, token: action.payload, errorMessage: null}
        case SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload}
        default:
            return state
    }
}