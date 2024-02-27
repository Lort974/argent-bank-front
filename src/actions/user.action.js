import axios from "axios";

export const USER_LOGIN = "USER_LOGIN"
export const GET_USER_INFO = "GET_USER_INFO"

export const userLogin = (data, navigate) => {
    return (dispatch) => {
        return axios({
            method: "post",
            url: "http://localhost:3001/api/v1/user/login",
            data
        })
        .then(response => {
            // La réponse du serveur sera disponible dans response.data
            if (response) {
                console.log(response.data);
                dispatch({type: USER_LOGIN, payload: response.data.body})
                localStorage.setItem('token', response.data.body.token); // Stockez le jeton dans le localStorage
                navigate("/user")
            }
            else {
                throw new Error('No response from server')
            }
        })
        .catch(error => {
            // Gérer les erreurs ici
            console.error(error);
        });
    }
}

export const getUserInfo = (data) => {
    return (dispatch) => {
        const token = localStorage.getItem('token'); // Récupérez le jeton du localStorage
        const authorization = "Bearer "+token
        return axios({
            method: 'post',
            url: "http://localhost:3001/api/v1/user/profile",
            headers: {
                Authorization: authorization
            },
            data
        })
        .then(response => {
            if (response) {
                console.log(response.data.body)
                dispatch({type: GET_USER_INFO, payload: response.data.body})
            } else {
                throw new Error('No response from server');
            }
        })
        .catch(error => {
            if (error.response && error.response.status === 401) { // 401 est le code d'erreur pour "Non autorisé"
                console.log("Vous n'êtes pas connecté(e)")
            }
            else {
                console.error(error)
            }
        })
    }
}

// createdAt
// : 
// "2024-02-19T14:24:03.352Z"
// email
// : 
// "tony@stark.com"
// firstName
// : 
// "Tony"
// id
// : 
// "65d3648384ee780f18b92599"
// lastName
// : 
// "Stark"
// updatedAt
// : 
// "2024-02-19T14:24:03.352Z"