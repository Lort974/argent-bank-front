// Importation des données des comptes
import accountsData from "../data/accounts.json";

const Account = ({ id }) => {
  // Création d'un formatteur de nombres pour le format US
  const formatUS = new Intl.NumberFormat("en-US");
  // Recherche du compte actuel dans les données des comptes
  const currentAccount = accountsData.find((i) => i.id === id);

  // Fonction pour rendre un compte
  const renderAccount = (account) => (
    <section key={account.id} className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {account.title} (x{account.id})
        </h3>
        <p className="account-amount">${formatUS.format(account.amount)}</p>
        <p className="account-amount-description">
          {account.amountDescription}
        </p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );

  // Si l'id est "all", rend tous les comptes, sinon rend le compte actuel
  const accounts =
    id === "all"
      ? accountsData.map(renderAccount)
      : renderAccount(currentAccount);

  return <>{accounts}</>;
};

export default Account;
