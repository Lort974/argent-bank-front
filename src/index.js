// Importation des modules nécessaires
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/style/main.css"; // Importation du fichier CSS principal

//REDUX
import { Provider } from "react-redux"; // Importation du Provider de Redux
import { configureStore } from "@reduxjs/toolkit"; // Importation de la fonction configureStore de Redux Toolkit
import rootReducer from "./reducers"; // Importation du reducer principal

// Configuration du store Redux
export const store = configureStore({
  reducer: rootReducer, // Utilisation du reducer principal
  devTools: true, // Activation des outils de développement Redux
});

// Création d'une racine pour le rendu concurrent
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Fourniture du store Redux à l'application */}
      <App /> {/* Rendu de l'application principale */}
    </Provider>
  </React.StrictMode>
);

// Mesure des performances de l'application
// Pour commencer à mesurer les performances dans votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
