import React from "react";
import { Link } from "react-router-dom";

const CaracterCard = (props) => {
  const { image, name, species, status } = props.caracter;

  return (
    <Link to={`/caracter/${props.caracter.id}`}>
      <article className="main-sectionCarac-article">
        <img
          className="main-sectionCarac-articleImage"
          src={image}
          alt={name}
          title={name}
        />
        <h3 className="main-sectionCarac-articleName">{name}</h3>
        <div className="main-sectionCarac-articleDiv">
          <h4 className="main-sectionCarac-articleSpecie">
            <em>Specie:</em> {species}
          </h4>
          <h4 className="main-sectionCarac-articleStatus">
            <em>Status:</em> {status}
          </h4>
        </div>
      </article>
    </Link>
  );
};

export default CaracterCard;
