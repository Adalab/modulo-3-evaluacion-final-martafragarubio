import React from "react";
import arrowLink from "../images/arrow.png";
import { Link } from "react-router-dom";

const CaracterDetail = (props) => {
  return (
    <div>
      <Link className="link" to="/">
        <img className="link-go" src={arrowLink} alt="go back!" width="25px" />
        Go back!
      </Link>

      <article className="cardDetail">
        <img
          className="cardDetail-image"
          src={props.caracter.image}
          alt={props.caracter.name}
          title={props.caracter.name}
        />
        <div className="cardDetail-info">
          <h3 className="cardDetail-infoName">{props.caracter.name}</h3>
          <p className="cardDetail-infoSpecie">
            <em>Specie:</em> {props.caracter.species}
          </p>
          <p className="cardDetail-infoStatus">
            <em>Status:</em> {props.caracter.status}
          </p>
          <p className="cardDetail-infoOrigin">
            <em>Origin:</em> {props.caracter.location.name}
          </p>
          <p className="cardDetail-infoGender">
            <em>Gender:</em> {props.caracter.gender}
          </p>
          <p className="cardDetail-infoEpisodes">
            <em>Episodes:</em> {props.caracter.episode.length}
          </p>
        </div>
      </article>
    </div>
  );
};

export default CaracterDetail;
