// Importation des données des fonctionnalités
import featuresData from "../data/features.json";

const Feature = ({ featureType }) => {
  // Recherche de la fonctionnalité correspondant au type passé en paramètre
  const feature = featuresData.find((feature) => feature.type === featureType);

  // Si la fonctionnalité n'est pas trouvée, affiche un message d'erreur
  if (!feature) {
    return <p>Feature not found</p>;
  }

  // Si la fonctionnalité est trouvée, affiche les détails de la fonctionnalité
  return (
    <>
      <div className="feature-item">
        <img
          src={feature.url}
          alt={`${feature.title} Icon`}
          className="feature-icon"
        />
        <h3 className="feature-item-title">{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </>
  );
};

export default Feature;
