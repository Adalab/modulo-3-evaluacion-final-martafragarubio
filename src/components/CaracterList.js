import React from "react";
import CaracterCard from "../components/CaracterCard";

const CaracterList = (props) => {
  /*  if (props.caracters.length === 0) {
    return <p>{`Caracter ${props.filterName} not found, sorry ☺ `}</p>;
  } else { */
  const caracterElements = props.caracters.map((caracter, index) => {
    return (
      <li className="main-sectionCarac" key={index}>
        <CaracterCard key={caracter.id} caracter={caracter} />
      </li>
    );
  });
  return (
    <section className="main-section">
      <ul className="main-sectionList">{caracterElements}</ul>
    </section>
  );
  /* } */
};

export default CaracterList;
