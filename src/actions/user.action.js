// Importation du module axios pour les requêtes HTTP
import axios from "axios";

// Définition des types d'actions
export const GET_USER_INFO = "GET_USER_INFO";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";

// Fonction pour obtenir les informations de l'utilisateur
export const getUserInfo = (token) => {
  // Retourne une fonction qui prend dispatch comme argument
  return (dispatch) => {
    // Effectue une requête POST pour obtenir les informations de l'utilisateur
    return axios({
      method: "post",
      url: "http://localhost:3001/api/v1/user/profile",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      // Si la requête est réussie, dispatch une action pour sauvegarder les informations de l'utilisateur
      dispatch({ type: GET_USER_INFO, payload: res.data.body });
    });
  };
};

// Fonction pour mettre à jour les informations de l'utilisateur
export const updateUserInfo = (data, token) => {
  // Retourne une fonction qui prend dispatch comme argument
  return (dispatch) => {
    // Effectue une requête PUT pour mettre à jour les informations de l'utilisateur
    return axios({
      method: "put",
      url: "http://localhost:3001/api/v1/user/profile",
      data,
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      // Si la requête est réussie, dispatch une action pour mettre à jour les informations de l'utilisateur
      dispatch({ type: UPDATE_USER_INFO, payload: res.data.body });
    });
  };
};
