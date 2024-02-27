import axios from "axios";

export const GET_TOKEN = "GET_TOKEN"
export const DELETE_TOKEN = "DELETE_TOKEN"

export const getToken = (data, navigate) => {
    return(dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data)
        .then((res) => {
            dispatch({ type: GET_TOKEN, payload: res.data.body })
            navigate("/profile")
        })
    }
}

export const deleteToken = (navigate) => {
    return(dispatch) => {
        dispatch({ type: DELETE_TOKEN, payload: {} })
        navigate("/")
    }
}