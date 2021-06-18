import React from "react";

//NAME FILTER:
const FilterEpisode = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({ value: ev.target.value, key: "episode" });
  };
  return (
    <>
      <label>episodes</label>
      <input
        className="main-inputName"
        type="text"
        name="episode"
        id="episode"
        value={props.filterEpisode}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterEpisode;
