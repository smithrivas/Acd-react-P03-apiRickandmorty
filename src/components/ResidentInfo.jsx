import { useState, useEffect } from "react";
import axios from "axios";

const ResidentInfo = ({ urlResident }) => {
  const [residents, setResidents] = useState(null);
  const loadResident = async () => {
    try {
      const res = await axios.get(urlResident);
      setResidents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadResident();
  }, []);
  return (
    <>
      {residents && (
        <div className="card">
          <div className="card-img">
            <img src={residents.image} alt="" />
            <p className="status">
              <span
                className={
                  residents.status === "Dead"
                    ? "dead"
                    : residents.status === "Alive"
                    ? "alive"
                    : "unknown"
                }
              >
                ⬤{" "}
              </span>
              {residents.status}
            </p>
          </div>
          <div className="card-info">
            <h2>{residents.name}</h2>
            <ul>
              <li>Specie</li>
              <li>
                <span>{residents.species}</span>
              </li>
              <li>Origen</li>
              <li>
                <span>{residents.origin.name}</span>
              </li>
              <li>Appearances in episodes</li>
              <li>
                <span>{residents.episode.length}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ResidentInfo;
