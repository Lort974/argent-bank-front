import axios from "axios";

export const GET_USER_INFO = "GET_USER_INFO"
export const UPDATE_USER_INFO = "UPDATE_USER_INFO"

export const getUserInfo = (token) => {
    return(dispatch) => {
        return axios({
            method: "post",
            url: "http://localhost:3001/api/v1/user/profile",
            headers: {
                Authorization: "Bearer "+token
            }
        })
        .then((res) => {
            dispatch({ type: GET_USER_INFO, payload: res.data.body })
        })
    }
}

export const updateUserInfo = (data, token) => {
    return(dispatch) => {
        return axios({
            method: "put",
            url: "http://localhost:3001/api/v1/user/profile",
            data,
            headers: {
                Authorization: "Bearer "+token
            }
        })
        .then((res) => {
            dispatch({ type: UPDATE_USER_INFO, payload: res.data.body })
        })
    }
}