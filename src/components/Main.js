import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

export default function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://odds.p.rapidapi.com/v4/sports/upcoming/odds",
      params: {
        regions: "us",
        oddsFormat: "decimal",
        markets: "h2h,spreads",
        dateFormat: "iso",
      },
      headers: {
        "X-RapidAPI-Host": "odds.p.rapidapi.com",
        "X-RapidAPI-Key": "99979be549mshc17f8fd8d4450e0p13b161jsnb3e21f2a6ea7",
      },
    };
    const fetchCards = () => {
      axios
        .request(options)
        .then(function (response) {
          setCards(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchCards();
  }, []);

  const card = cards.map((card) => {
    console.log(cards);
    return <Card key={card.id} {...card} />;
  });

  return <div className="card">{card}</div>;
}
