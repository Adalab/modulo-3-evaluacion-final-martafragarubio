import React, { useState, useEffect } from "react";
import "../stylesheets/App.css";
import headerLogo from "../images/RickandMorty.png";
import getDataApi from "../services/api";
import ls from "../services/localStorage";
import Filters from "../components/Filters";
import CaracterList from "../components/CaracterList";
import CaracterDetail from "../components/CaracterDetail";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const [caracters, setCaracters] = useState(ls.get("caracters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecie, setFilterSpecie] = useState(ls.get("filterSpecie", ""));
  const [filterEpisode, setFilterEpisode] = useState(
    ls.get("filterEpisode", "")
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

  useEffect(() => {
    ls.set("filterSpecie", filterSpecie);
  }, [filterSpecie]);

  useEffect(() => {
    ls.set("filterEpisode", filterEpisode);
  }, [filterEpisode]);

  const handleFilter = (data) => {
    console.log(data);
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "specie") {
      setFilterSpecie(data.value);
    } else if (data.key === "episode") {
      setFilterEpisode(data.value);
    }
  };

  //RENDER
  const filteredCaracters = caracters
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .filter((caracter) => {
      return caracter.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((caracter) => {
      if (caracter.episode.length > filterEpisode) {
        return true;
      } else {
        return false;
      }
    })
    .filter((caracter) => {
      if (filterSpecie === "") {
        return true;
      } else {
        return caracter.species === filterSpecie;
      }
    });

  const renderCaracterDetail = (props) => {
    const routeCaracterId = parseInt(props.match.params.id);
    const foundCaracter = caracters.find(
      (caracter) => caracter.id === routeCaracterId
    );
    if (foundCaracter) {
      return <CaracterDetail caracter={foundCaracter} />;
    } else {
      return <p>Caracter not found, sorry ☺ </p>;
    }
  };

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
        <Route exact path="/">
          <main className="main">
            <Filters
              filterEpisode={filterEpisode}
              filterName={filterName}
              filterSpecie={filterSpecie}
              handleFilter={handleFilter}
            />
            <CaracterList caracters={filteredCaracters} />
          </main>
        </Route>
        {/* <Route path="/caracter/">
          <CaracterDetail />
        </Route> */}
        <Route path="/caracter/:id" render={renderCaracterDetail} />
      </Switch>
    </>
  );
};

export default App;
