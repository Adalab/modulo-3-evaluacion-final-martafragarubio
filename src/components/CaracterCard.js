import React from "react";

const CaracterCard = (props) => {
  return (
    <article className="main-sectionCarac-article">
      <img
        className="main-sectionCarac-articleImage"
        src={props.caracter.image}
        alt={props.caracter.name}
        title={props.caracter.name}
      />
      <h3 className="main-sectionCarac-articleName">{props.caracter.name}</h3>
      <h4 className="main-sectionCarac-articleSpecie">
        {props.caracter.species}
      </h4>
    </article>
  );
};

export default CaracterCard;
