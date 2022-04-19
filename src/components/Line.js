import React from "react";

export default function Line(props) {
  const h2h = props.markets.filter((element) => {
    return element.key.includes("h2h");
  });

  const spreads = props.markets.filter((element) => {
    return element.key.includes("spread");
  });

  let h2hDiv = "";

  if (h2h.length > 0) {
    h2hDiv = h2h[0].outcomes.map((outcome) => {
      return (
        <div>
          <div>{outcome.name} </div>
          <div>Odds: {outcome.price} </div>
        </div>
      );
    });
  }

  let spreadDiv = "";

  if (spreads.length > 0) {
    spreadDiv = spreads[0].outcomes.map((outcome) => {
      return (
        <div>
          <div>{outcome.name} </div>
          <div>Spread:{outcome.point} </div>
          <div>Odds: {outcome.price} </div>
        </div>
      );
    });
  }

  console.log("spread:", spreads);

  return (
    <div>
      <h4>{props.title}</h4>
      <h2>H2H</h2>
      {h2hDiv}
      <h2>Spreads</h2>
      {spreadDiv}
    </div>
  );
}
