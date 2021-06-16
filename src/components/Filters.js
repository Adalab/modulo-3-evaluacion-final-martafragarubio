import React from "react";
/* import FilterStatus from "../components/FilterStatus"; */

//NAME FILTER:
const Filters = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({ value: ev.target.value, key: "name" });
  };
  return (
    <form className="header-form">
      <label className="header-label" htmlFor="name">
        Pick a caracter!
      </label>
      <input
        className="header-inputName"
        type="text"
        name="name"
        id="name"
        placeholder="Pickle Rick"
        onChange={handleInput}
      />
      {/* <FilterStatus/> */}
    </form>
  );
};

export default Filters;
