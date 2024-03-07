// Importation du module axios pour les requêtes HTTP
import axios from "axios";

// Définition des types d'actions
export const GET_TOKEN = "GET_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

// Fonction pour obtenir un token
export const getToken = (data, navigate) => {
  // Retourne une fonction qui prend dispatch comme argument
  return (dispatch) => {
    // Effectue une requête POST pour se connecter
    return axios
      .post("http://localhost:3001/api/v1/user/login", data)
      .then((res) => {
        // Si la requête est réussie, dispatch une action pour sauvegarder le token
        dispatch({ type: GET_TOKEN, payload: res.data.body.token });
        // Navigue vers le profil de l'utilisateur
        navigate("/profile");
      })
      .catch((error) => {
        // Gestion des erreurs
        if (error.response && error.response.status === 400) {
          // Si le statut de la réponse est 400, dispatch une action pour définir le message d'erreur
          dispatch(setErrorMessage("Les identifiants sont incorrects"));
        } else {
          // Pour toute autre erreur, dispatch une action pour définir le message d'erreur
          dispatch(setErrorMessage("Une erreur s'est produite"));
        }
      });
  };
};

// Fonction pour supprimer le token
export const deleteToken = (navigate) => {
  // Retourne une fonction qui prend dispatch comme argument
  return (dispatch) => {
    // Dispatch une action pour supprimer le token
    dispatch({ type: DELETE_TOKEN, payload: null });
    // Navigue vers la page d'accueil
    navigate("/");
  };
};

// Fonction pour définir le message d'erreur
export const setErrorMessage = (message) => ({
  // Dispatch une action pour définir le message d'erreur
  type: SET_ERROR_MESSAGE,
  payload: message,
});
