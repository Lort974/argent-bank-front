import axios from "axios";

export const userLogin = (e, userCredentials, navigate) => {
    e.preventDefault()
    console.log(userCredentials)

    axios.post('http://localhost:3001/api/v1/user/login', userCredentials)
        .then(response => {
            // La réponse du serveur sera disponible dans response.data
            console.log(response.data);
            localStorage.setItem('token', response.data.body.token); // Stockez le jeton dans le localStorage
            navigate("/user")
        })
        .catch(error => {
            // Gérer les erreurs ici
            console.error(error);
        });
}

// export const getUserInfo = () => {
//     const token = localStorage.getItem('token'); // Récupérez le jeton du localStorage
//     const authorization = "Bearer "+token
//     return axios({
//         method: 'post',
//         url: "http://localhost:3001/api/v1/user/profile",
//         headers: {
//             Authorization: authorization
//         }
//     })
//     .then(response => {
//         console.log(response.data.body)
//         if (response) {
//             return response;
//         } else {
//             throw new Error('No response from server');
//         }
//     })
//     .catch(error => {
//         if (error.response && error.response.status === 401) { // 401 est le code d'erreur pour "Non autorisé"
//             console.log("Vous n'êtes pas connecté(e)")
//         }
//         else {
//             console.error(error)
//         }
//     })
// }

