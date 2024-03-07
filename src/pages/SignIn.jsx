// Importation des modules nécessaires
import { useNavigate } from "react-router-dom";
import { getToken } from "../actions/login.action";
import { store } from "../index";
import { useRef } from "react";
import { useSelector } from "react-redux";

const SignIn = () => {
  // Utilisation du hook useNavigate pour la navigation
  const navigate = useNavigate();
  // Utilisation du hook useRef pour référencer le formulaire
  const form = useRef();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Si la case "remember me" est cochée, sauvegarde l'email dans le localStorage
    if (form.current[2].checked) {
      localStorage.setItem("userEmail", form.current[0].value);
    } else {
      // Sinon, supprime l'email du localStorage
      localStorage.removeItem("userEmail");
    }

    // Création des données de connexion
    const loginData = {
      email: form.current[0].value,
      password: form.current[1].value,
    };

    // Dispatch de l'action pour obtenir le token
    store.dispatch(getToken(loginData, navigate));
  };

  // Récupération du message d'erreur depuis le state du reducer de connexion
  const errorMessage = useSelector((state) => state.loginReducer).errorMessage;

  // Rendu du composant
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form
            ref={form}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="input-wrapper">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                defaultValue={
                  localStorage.getItem("userEmail")
                    ? localStorage.getItem("userEmail")
                    : null
                }
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                defaultChecked={
                  localStorage.getItem("userEmail") ? true : false
                }
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignIn;
