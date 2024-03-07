// Importation des types d'actions
import {
  DELETE_TOKEN,
  GET_TOKEN,
  SET_ERROR_MESSAGE,
} from "../actions/login.action";

// État initial du reducer
const initialState = {
  token: null, // Token initialisé à null
  errorMessage: null, // Message d'erreur initialisé à null
};

// Fonction reducer pour la connexion
export default function loginReducer(state = initialState, action) {
  // Switch sur le type de l'action
  switch (action.type) {
    case GET_TOKEN:
      // Si l'action est de type GET_TOKEN, on met à jour le token et on réinitialise le message d'erreur
      return { ...state, token: action.payload, errorMessage: null };
    case DELETE_TOKEN:
      // Si l'action est de type DELETE_TOKEN, on supprime le token et on réinitialise le message d'erreur
      return { ...state, token: action.payload, errorMessage: null };
    case SET_ERROR_MESSAGE:
      // Si l'action est de type SET_ERROR_MESSAGE, on met à jour le message d'erreur
      return { ...state, errorMessage: action.payload };
    default:
      // Par défaut, on retourne l'état actuel
      return state;
  }
}
