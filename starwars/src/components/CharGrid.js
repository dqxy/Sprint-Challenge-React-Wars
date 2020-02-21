import React, { useState, useEffect } from "react";
import CharCard from "./CharCard";
import axios from "axios";
import styled from "styled-components";

export default function CharGrid() {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setChars(response.data.results);
      })
      .catch(error => {
        console.log("Sorry no results", error);
      });
  }, []);
  return (
    <div className="container">
      <div className="entry"><center>
        {chars.map(chara => {
          return <CharCard name={chara.name} height={chara.height} mass={chara.mass} eye_color={chara.eye_color} birth_year={chara.birth_year} />;
        })}
      </center></div>
    </div>
  );
}
