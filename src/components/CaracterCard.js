import React from "react";
import { Link } from "react-router-dom";

const CaracterCard = (props) => {
  return (
    <Link to={`/caracter/${props.caracter.id}`}>
      <article className="main-sectionCarac-article">
        <img
          className="main-sectionCarac-articleImage"
          src={props.caracter.image}
          alt={props.caracter.name}
          title={props.caracter.name}
        />
        <h3 className="main-sectionCarac-articleName">{props.caracter.name}</h3>
        <div className="main-sectionCarac-articleDiv">
          <h4 className="main-sectionCarac-articleSpecie">
            <em>Specie:</em> {props.caracter.species}
          </h4>
          <h4 className="main-sectionCarac-articleStatus">
            <em>Status:</em> {props.caracter.status}
          </h4>
        </div>
      </article>
    </Link>
  );
};

export default CaracterCard;
