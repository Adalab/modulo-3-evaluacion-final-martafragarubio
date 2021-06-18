import React from "react";
import FilterName from "../components/FilterName";
import FilterSpecie from "../components/FilterSpecie";
import FilterEpisode from "../components/FilterEpisode";

const Filters = (props) => {
  return (
    <form className="main-form">
      <FilterName
        filterName={props.filterName}
        handleFilter={props.handleFilter}
      />
      <FilterSpecie
        filterSpecie={props.filterSpecie}
        handleFilter={props.handleFilter}
      />
      <FilterEpisode
        filterEpisode={props.filterEpisode}
        handleFilter={props.handleFilter}
      />
    </form>
  );
};

export default Filters;
