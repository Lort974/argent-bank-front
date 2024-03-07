// Importation des types d'actions
import { DELETE_TOKEN } from "../actions/login.action";
import { GET_USER_INFO, UPDATE_USER_INFO } from "../actions/user.action";

// État initial du reducer
const initialState = {};

// Fonction reducer pour l'utilisateur
export default function userReducer(state = initialState, action) {
  // Switch sur le type de l'action
  switch (action.type) {
    case GET_USER_INFO:
      // Si l'action est de type GET_USER_INFO, on met à jour l'état avec les informations de l'utilisateur
      return action.payload;
    case UPDATE_USER_INFO:
      // Si l'action est de type UPDATE_USER_INFO, on met à jour l'état avec les nouvelles informations de l'utilisateur
      return action.payload;
    case DELETE_TOKEN:
      // Si l'action est de type DELETE_TOKEN, on réinitialise l'état à l'état initial
      return initialState;
    default:
      // Par défaut, on retourne l'état actuel
      return state;
  }
}
