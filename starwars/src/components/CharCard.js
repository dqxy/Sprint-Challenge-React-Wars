import React from "react";
import styled from "styled-components";
const StarCard = styled.div`
  background: #000000;
  color: #ffffff;
  width: 500px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CharCard = props => {
  return (
  <StarCard>
    <h2>
        {props.name}<br/>
        Height: {props.height}<br/>
        Mass: {props.mass}<br/>
        Eyes: {props.eye_color}<br/>
        Born: {props.birth_year}
    </h2>
  </StarCard>
  );
};

export default CharCard;
