import React from "react";

//NAME FILTER:
const FilterName = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({ value: ev.target.value, key: "name" });
  };
  return (
    <>
      <label className="main-label" htmlFor="name">
        Pick a caracter!
      </label>
      <input
        className="main-inputName"
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        placeholder="Pickle Rick!"
        onChange={handleInput}
      />
    </>
  );
};

export default FilterName;
