import { useState } from "react";
import styled from "styled-components";

export function HabitToday({ data, habitDone }) {
 
  return (
    <Habit>
      <Container>
        <Legenda>
          <h4>{data.name}</h4>
          <h6>Sequencia atual: {data.currentSequence} dias </h6>
          <h6>Seu recorde: {data.highestSequence} dias</h6>
        </Legenda>
        <Icon done={data.done}>
          <ion-icon
            onClick={() => habitDone(data.id, data)}
            name="checkbox"
          ></ion-icon>
        </Icon>
      </Container>
    </Habit>
  );
}


const Icon = styled.div`
  font-size: 80px;

  ion-icon {
    color: ${(props) => (props.done ? "#8FC549" : "#E7E7E7")};

    :hover {
      cursor: pointer;
    }
  }
`;

const Legenda = styled.div`
  display: flex;
  flex-direction: column;
  span{
    color: #8FC549;
  }
  h6 {
    font-weight: 300;
    font-family: "Lexend Deca";
    font-size: 16px;
    margin-top: 5px;
    color: darkgray;
  }

  h4 {
    font-weight: 500;
    font-family: "Lexend Deca";
    font-size: 20px;
    margin-top: 5px;
    color: #000000;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 80px;
`;

const Habit = styled.div`
  width: 100%;
  height: auto;
  margin-top: 15px;
  padding: 1.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  

  h1 {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #000000;
    font-weight: 300;
  }
`;
