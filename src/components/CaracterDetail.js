import React from "react";
import { Link } from "react-router-dom";

const CaracterDetail = (props) => {
  return (
    <div className="main-sectionCarac-article">
      <Link to="/">Go back!</Link>
      Caracters Detail
      {/*  <Link to="/">Go back...</Link>
      <div className="cardDetail">
        <img
          className="main-sectionCarac-articleImage"
          src={props.caracter.image}
          alt={props.caracter.name}
          title={props.caracter.name}
        />
        <div className="main-sectionCarac-articleDiv">
        <h3 className="main-sectionCarac-articleName">{props.caracter.name}</h3>
          <ul className="cardDetail-list">
        <li className="main-sectionCarac-articleSpecie">
            <em>Specie:</em> {props.caracter.species}
          </li>
          <li className="main-sectionCarac-articleStatus">
            <em>Status:</em> {props.caracter.status}
          </li>
          <li className="main-sectionCarac-articleOrigin">
            <em>Origin:</em> {props.caracter.location.name}
          </li>
          <li className="main-sectionCarac-articleGender">
            <em>Gender:</em> {props.caracter.gender}
          </li>
           <li className="main-sectionCarac-articleEpisodes">
            <em>Episodes:</em> {props.caracter.episode}
          </li>
          </ul>
        </div>
        </div> */}
    </div>
  );
};

export default CaracterDetail;
