import { useState, useEffect } from "react";
import axios from "axios";
import Location from "./components/Location";
import FormSearch from "./components/FormSearch";
import ResidentInfo from "./components/ResidentInfo";
import style from "./components/style.css";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);
  const [search, setSearch] = useState("");

  const randomLocation = () => {
    return Math.round(Math.random(1, 126) * 126);
  };

  const loadLocation = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    try {
      const res = await axios.get(url);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (search) {
      loadLocation(search);
    } else {
      loadLocation(randomLocation());
    }
  };

  const handleChangeSearch = (e) => {
    const newValue = e.target.value;
    if (/^\d{0,3}$/.test(newValue)) setSearch(newValue);
  };

  useEffect(() => {
    loadLocation(randomLocation());
  }, []);

  return (
    <div className="App">
      <div>
        <img
          className="banner"
          src="https://i.redd.it/o6cwlzg3exk41.png"
          alt="Image-banner"
        />
      </div>
      <FormSearch
        handleForm={handleForm}
        search={search}
        handleChangeSearch={handleChangeSearch}
      />
      {locationInfo && <Location locationInfo={locationInfo} />}
      {/* <h2>Population</h2> */}
      {locationInfo &&
        locationInfo.residents.map((resident) => (
          <ResidentInfo key={resident} urlResident={resident} />
        ))}
    </div>
  );
}

export default App;
