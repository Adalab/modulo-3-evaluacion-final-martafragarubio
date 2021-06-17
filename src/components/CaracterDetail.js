import React from "react";
import arrowLink from "../images/arrow.png";
import { Link } from "react-router-dom";

const CaracterDetail = (props) => {
  const { image, name, species, status, location, gender, episode } =
    props.caracter;

  return (
    <div className="card">
      <Link className="link" to="/">
        <img className="link-go" src={arrowLink} alt="go back!" width="25px" />
        Go back!
      </Link>

      <article className="cardDetail">
        <img className="cardDetail-image" src={image} alt={name} title={name} />
        <div className="cardDetail-info">
          <h3 className="cardDetail-infoName">{name}</h3>
          <p className="cardDetail-infoSpecie">
            <em>Specie:</em> {species}
          </p>
          <p className="cardDetail-infoStatus">
            <em>Status:</em> {status}
          </p>
          <p className="cardDetail-infoOrigin">
            <em>Origin:</em> {location}
          </p>
          <p className="cardDetail-infoGender">
            <em>Gender:</em> {gender}
          </p>
          <p className="cardDetail-infoEpisodes">
            <em>Episodes:</em> {episode.length}
          </p>
        </div>
      </article>
    </div>
  );
};

export default CaracterDetail;
