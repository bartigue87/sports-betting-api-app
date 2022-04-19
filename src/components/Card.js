import React, { useState } from "react";
import Line from "./Line";

export default function Movie(props) {
  const IMG_PATH = "http://image.tmdb.org/t/p/w1280";

  const lineArr = props.bookmakers;

  console.log("lineArr:", lineArr);

  const lines = lineArr.filter((element) => {
    return (
      element.key.includes("draftkings") ||
      element.key.includes("fanduel") ||
      element.key.includes("betmgm")
    );
  });

  const line = lines.map((line) => {
    return <Line key={line.key} {...line} />;
  });

  return (
    <div className="card-container">
      <div className="card-info">
        <h2>{props.sport_title}</h2>
        <p>{props.away_team}</p>
        <p>Vs.</p>
        <p>{props.home_team}</p>
      </div>
      <div className="overview">
        <h3>Lines</h3>
        {line}
      </div>
    </div>
  );
}
