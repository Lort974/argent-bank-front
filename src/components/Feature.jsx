import featuresData from "../data/features.json"

const Feature = ({featureType}) => {
    const feature = featuresData.find((feature) => feature.type === featureType)

    if (!feature) {
        return <p>Feature not found</p>;
    }

    return <>
        <div className="feature-item">
            <img src={feature.url} alt={`${feature.title} Icon`} className="feature-icon" />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.description}</p>
        </div>
    </>
}

export default Feature