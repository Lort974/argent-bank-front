import axios from "axios";

export const GET_TOKEN = "GET_TOKEN"
export const DELETE_TOKEN = "DELETE_TOKEN"
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"

export const getToken = (data, navigate) => {
    return(dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data)
        .then((res) => {
            dispatch({ type: GET_TOKEN, payload: res.data.body.token })
            navigate("/profile")
        })
        .catch((error) => {
            if (error.response && error.response.status === 400) {
                dispatch(setErrorMessage("Les identifiants sont incorrects"))
                // console.error("Erreur 400 : les identifiants sont incorrects.")
            }
            else {
                dispatch(setErrorMessage("Une erreur s'est produite"))
                // console.error(error)
            }
        })
    }
}

export const deleteToken = (navigate) => {
    return(dispatch) => {
        dispatch({ type: DELETE_TOKEN, payload: null })
        navigate("/")
    }
}

export const setErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    payload: message
})