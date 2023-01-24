import React from "react";
import path from "../public/images/path.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="left-block">
        <img src={props.image} />
      </div>
      <div className="right-block">
        <div className="address">
          <span className="maps-pin-logo">
            <img src={path} />
          </span>
          <span className="country">{props.country}</span>
          <span className="link">
            <a href={props.address}>View on Google Maps</a>
          </span>
        </div>
        <h2 className="title">{props.title}</h2>
        <h6 className="date">
          {props.startDate} - {props.endDate}
        </h6>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
