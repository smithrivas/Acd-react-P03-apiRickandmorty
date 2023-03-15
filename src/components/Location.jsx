const Location = ({ locationInfo }) => {
  return (
    <div className="location">
      <h1>{locationInfo.name}</h1>
      <div className="location-info">
        <p>
          Type: <span>{locationInfo.type}</span>
        </p>
        <p>
          Dimension: <span>{locationInfo.dimension}</span>
        </p>
        <p>
          Residents: <span>{locationInfo.residents.length}</span>
        </p>
      </div>
    </div>
  );
};

export default Location;
