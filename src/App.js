import React from "react";
import "./styles.css";
import { useState } from "react";

const NationalParkDb = {
  Madhyapradesh: [
    { name: "Kanha Tiger Reserve", city: "Mandla" },
    { name: "Bandhavgarh National Park", city: "Jabalpur" }
  ],

  Rajasthan: [
    {
      name: "Ranthambore National Park ",
      city: "Madhopur"
    },
    {
      name: "Keoladeo National Park",
      city: "Bharatpur"
    }
  ],
  Kerela: [
    {
      name: "Eravikulam National Park",
      city: "Ernakulam"
    },
    {
      name: "Silent Valley National Park",
      city: "Mannarkkad"
    }
  ]
};

var states = Object.keys(NationalParkDb);
export default function App() {
  const [selectedState, setState] = useState("Madhyapradesh");
  function stateclickHandler(state) {
    setState(state);
  }

  return (
    <div className="App">
      <h1>National Parks In India</h1>
      <p className="description">
        checkout different National Parks in different states of India.
      </p>
      <div>
        {states.map((state) => (
          <button
            className="state-btn"
            onClick={() => stateclickHandler(state)}
          >
            {state}
          </button>
        ))}
      </div>

      <hr></hr>
      <div className="output">
        <ul>
          {NationalParkDb[selectedState].map((park) => (
            <li key={park.name} className="park-element">
              <div className="park-name">{park.name}</div>
              <div className="park-city">{park.city}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
