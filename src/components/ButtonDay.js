import { useState } from "react";
import styled from "styled-components";

export function ButtonDay({ data, handleDayActive }) {
  return (
    <ButtonDayContainer
      onClick={() => handleDayActive(data.id)}
      active={data.active}
    >
      <h4>{data.day}</h4>
    </ButtonDayContainer>
  );
}

const ButtonDayContainer = styled.div`
  width: 30px;
  height: 30px;

  h4 {
    font-size: 20px;
    font-family: "Lexend Deca";
    color: ${({ active }) => (active ? "#FFFFFF" : "#D4D4D4")};
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  background-color: ${({ active }) => (active ? "#CFCFCF" : "#FFFFFF")};
  border: thin solid #d4d4d4;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;
