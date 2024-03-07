// Importation des modules nécessaires
import { NavLink, useNavigate } from "react-router-dom";
import argentBankLogo from "../assets/images/argentBankLogo.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "../actions/user.action";
import { store } from "..";
import { deleteToken } from "../actions/login.action";

const Header = () => {
  // Utilisation du hook useNavigate pour la navigation
  const navigate = useNavigate();

  // Récupération du token depuis le state du reducer de connexion
  const token = useSelector((state) => state.loginReducer).token;

  // Utilisation du hook useEffect pour récupérer les informations de l'utilisateur lors du montage du composant
  useEffect(() => {
    if (token) {
      store.dispatch(getUserInfo(token));
    }
  }, []);

  // Récupération des informations de l'utilisateur depuis le state du reducer utilisateur
  const user = useSelector((state) => state.userReducer);

  // Fonction pour gérer la déconnexion
  const handleSignOut = (e) => {
    e.preventDefault();

    store.dispatch(deleteToken(navigate));
  };

  // Vérification si l'utilisateur est connecté
  const isSignedIn = token ? true : false;

  // Définition des liens de navigation en fonction de l'état de connexion de l'utilisateur
  const navLinks = isSignedIn ? (
    <>
      <NavLink className="main-nav-item" to="profile">
        <i className="fa fa-user-circle"></i> {user.firstName}
      </NavLink>
      <a className="main-nav-item" onClick={(e) => handleSignOut(e)}>
        <i className="fa fa-sign-out"></i> Sign out
      </a>
    </>
  ) : (
    <NavLink className="main-nav-item" to="sign-in">
      <i className="fa fa-user-circle"></i> Sign In
    </NavLink>
  );

  // Rendu du composant
  return (
    <>
      <header>
        <nav className="main-nav">
          <NavLink className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src={argentBankLogo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
          <div>{navLinks}</div>
        </nav>
      </header>
    </>
  );
};

export default Header;
