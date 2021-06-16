import React from "react";

//SPECIE FILTER:
const FilterSpecie = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({ value: ev.target.value, key: "specie" });
  };
  return (
    <>
      <label className="main-label" htmlFor="status">
        Pick a specie...
      </label>
      <select
        className="main-inputSpecie"
        name="specie"
        id="specie"
        value={props.filterSpecie}
        onChange={handleInput}
      >
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterSpecie;
