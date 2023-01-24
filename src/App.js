import React from "react";
import Navbar from "./Navbar";
import "../index.css";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cardElements = data.map((data) => {
    return (
      <Card
        image={data.imageUrl}
        country={data.location}
        address={data.googleMapsUrl}
        title={data.title}
        startDate={data.startDate}
        endDate={data.endDate}
        description={data.description}
      />
    );
  });
  return (
    <div className="page">
      <Navbar />
      <div className="card-wrapper">{cardElements}</div>
    </div>
  );
}
