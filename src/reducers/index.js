// Importation de la fonction combineReducers de redux
import { combineReducers } from "redux";
// Importation des reducers
import userReducer from "./user.reducer";
import loginReducer from "./login.reducer";

// Combinaison des reducers en un seul reducer principal
export default combineReducers({
  // Le reducer userReducer gère l'état de l'utilisateur
  userReducer,
  // Le reducer loginReducer gère l'état de la connexion
  loginReducer,
});
