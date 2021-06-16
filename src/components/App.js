import React, { useState, useEffect } from "react";
import "../stylesheets/App.css";
import headerLogo from "../images/RickandMorty.png";
import getDataApi from "../services/api";
import ls from "../services/localStorage";
import Filters from "../components/Filters";
import CaracterList from "../components/CaracterList";

const App = () => {
  const [caracters, setCaracters] = useState(ls.get("caracters", []));
  const [filterName, setFilterName] = useState(
    /* ls.get("filterName", " ") */ ""
  );

  useEffect(() => {
    if (caracters.length === 0) {
      getDataApi().then((caractersData) => {
        //console.log(caractersData);
        setCaracters(caractersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("caracters", caracters);
  }, [caracters]);

  useEffect(() => {
    ls.set("filterName", filterName);
  }, [filterName]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  //RENDER
  const filteredCaracters = caracters.filter((caracter) => {
    return caracter.name.toLowerCase().includes(filterName);
  });

  return (
    <>
      <header className="header">
        <img
          className="header-logo"
          src={headerLogo}
          alt="RickandMorty"
          width="400px"
        />
        <Filters handleFilter={handleFilter} />
      </header>
      <main className="main">
        <CaracterList caracters={filteredCaracters} />
      </main>
    </>
  );
};

export default App;
