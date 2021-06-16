import React, { useState, useEffect } from "react";
import "../stylesheets/App.css";
import headerLogo from "../images/RickandMorty.png";
import getDataApi from "../services/api";
import ls from "../services/localStorage";
import Filters from "../components/Filters";
import CaracterList from "../components/CaracterList";
import CaracterDetail from "../components/CaracterDetail";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const [caracters, setCaracters] = useState(ls.get("caracters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecie, setFilterSpecie] = useState(ls.get("filterSpecie", ""));

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

  useEffect(() => {
    ls.set("filterSpecie", filterSpecie);
  }, [filterSpecie]);

  const handleFilter = (data) => {
    console.log(data);
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "specie") {
      setFilterSpecie(data.value);
    }
  };

  //RENDER
  const filteredCaracters = caracters
    .filter((caracter) => {
      return caracter.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((caracter) => {
      if (filterSpecie === "") {
        return true;
      } else {
        return caracter.species === filterSpecie;
      }
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
      </header>
      <Switch>
        <main className="main">
          <Filters
            filterName={filterName}
            filterSpecie={filterSpecie}
            handleFilter={handleFilter}
          />
          <CaracterList caracters={filteredCaracters} />
        </main>
        <CaracterDetail />
      </Switch>
    </>
  );
};

export default App;
