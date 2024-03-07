// Importation des modules nécessaires
import { useState, useEffect, useRef } from "react";
import Account from "../components/Account";
import { useNavigate } from "react-router-dom";
import { getUserInfo, updateUserInfo } from "../actions/user.action";
import { useSelector } from "react-redux";
import { store } from "..";

const User = () => {
  // Utilisation du hook useNavigate pour la navigation
  const navigate = useNavigate();

  // Fonction pour rediriger vers la page de connexion
  const goSignIn = () => {
    navigate("/sign-in");
  };

  // Récupération du token depuis le state du reducer de connexion
  const token = useSelector((state) => state.loginReducer);

  // Utilisation du hook useEffect pour récupérer les informations de l'utilisateur lors du montage du composant
  useEffect(() => {
    if (token.token) {
      store.dispatch(getUserInfo(token.token));
    }
  }, [token.token]);

  // Récupération des informations de l'utilisateur depuis le state du reducer utilisateur
  const user = useSelector((state) => state.userReducer);

  // Préparation de l'édition des informations de l'utilisateur
  const [editToggle, setEditToggle] = useState(false);

  // Utilisation du hook useRef pour référencer le formulaire
  const form = useRef();

  // Fonction pour gérer l'édition des informations de l'utilisateur
  const handleEdit = (e) => {
    e.preventDefault();

    const editData = {
      firstName: form.current[0].value,
      lastName: form.current[1].value,
    };

    store.dispatch(updateUserInfo(editData, token.token));
    setEditToggle(!editToggle);
  };

  // Si pas de token, alors pas de connexion en cours, alors affiche une page d'erreur
  if (!token.token) {
    return (
      <>
        <main className="main bg-dark">
          <div className="header">
            <h1>You are not signed in</h1>
            <button className="edit-button" onClick={(e) => goSignIn()}>
              Sign in now
            </button>
          </div>
        </main>
      </>
    );
  }

  // Si l'utilisateur est connecté, affiche les informations de l'utilisateur et les comptes
  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          {editToggle ? (
            <form
              ref={form}
              className="edit-wrapper"
              onSubmit={(e) => handleEdit(e)}
            >
              <input
                required
                type="text"
                id="firstname"
                placeholder={user.firstName}
                autoFocus={true}
              />
              <input
                required
                type="text"
                id="lastname"
                placeholder={user.lastName}
              />
              <button type="submit" className="edit-button">
                Save
              </button>
              <button
                type="button"
                className="edit-button"
                onClick={() => setEditToggle(!editToggle)}
              >
                Cancel
              </button>
            </form>
          ) : (
            <button
              className="edit-button"
              onClick={() => setEditToggle(!editToggle)}
            >
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account id="all" />
      </main>
    </>
  );
};

export default User;
