import { useState, useEffect } from "react";
import axios from "axios";
import Location from "./components/Location";
import FormSearch from "./components/FormSearch";
import ResidentInfo from "./components/ResidentInfo";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

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

  // Prueba de buscador con nombre
  const loadLocationWithname = async (nameLocation) => {
    const url = `https://rickandmortyapi.com/api/location/?name=${nameLocation}`;
    try {
      const res = await axios.get(url);
      setLocationInfo(res.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (search) {
      // loadLocation(search);
      loadLocationWithname(search);
    } else {
      loadLocation(randomLocation());
    }
  };

  const handleChangeSearch = (e) => {
    const newValue = e.target.value;
    // if (/^\d{0,3}$/.test(newValue)) setSearch(newValue);
    setSearch(newValue);
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
      <div className="container">
        <FormSearch
          handleForm={handleForm}
          search={search}
          handleChangeSearch={handleChangeSearch}
        />
        {locationInfo && <Location locationInfo={locationInfo} />}

        <div className="card-not-found">
          {locationInfo && locationInfo.residents.length === 0 && <NotFound />}
        </div>
        <div className="cards-residents">
          {locationInfo &&
            locationInfo.residents.map((resident) => (
              <ResidentInfo key={resident} urlResident={resident} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
