const Country = (props) => {
    const { flags: { png }, name: { common }, population, region, capital } = props;
    return (
        <div className="country">
            <div className="country-image">
                <img src={png} alt={common} />
            </div>
            <div className="country-info">
                <h2>{common}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </div>
    );
}

export default Country;