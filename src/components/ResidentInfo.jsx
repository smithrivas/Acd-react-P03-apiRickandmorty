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
        <div>
          <img src={residents.image} alt="" />
          <h2>{residents.name}</h2>
          <ul>
            <li>Specie</li>
            <li>
              <span>{residents.species}</span>
            </li>
            <li>Status</li>
            <li>
              <span>{residents.status}</span>
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
      )}
    </>
  );
};

export default ResidentInfo;
