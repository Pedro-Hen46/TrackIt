import styled from "styled-components";
import { useState } from "react";
import { DayDisplay } from "../DayDisplay";
import LixoIcon from "../../Images/lixeira.png";
import { useUserLogged } from "../../context/UserLoggedProvider";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Habit({ habit, id }) {
  const [days, setDays] = useState([
    { id: 0, day: "D", active: false },
    { id: 1, day: "S", active: false },
    { id: 2, day: "T", active: false },
    { id: 3, day: "Q", active: false },
    { id: 4, day: "Q", active: false },
    { id: 5, day: "S", active: false },
    { id: 6, day: "S", active: false },
  ]);

  const [loading, setLoading] = useState(false);

  const { saveDataUser } = useUserLogged();
  const config = {
    headers: {
      Authorization: `Bearer ${saveDataUser.token}`,
    },
  };

  function DeleteHabitFromAPI() {
    const decision = window.confirm("Tem certeza que deseja excluir este Habito?");
    if (decision){
    const promise = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
      config
    );
    setLoading(true);
    promise.then(() => {
      console.log("habito excluido da api");
    });

    promise.catch((error) => {
      console.log("estou com o problema: ", error);
    });

    promise.finally(() => setLoading(false));
  }
  console.log("Nao vou apagar meu brother")
  }

  return (
    <HabitDiv>
      {loading ? (
        <ThreeDots color=" #52b6ff" height={50} width={50} />
      ) : (
        <>
          <ContainerHabit>
            <h4>{habit.name}</h4>
            <img
              onClick={() => DeleteHabitFromAPI()}
              src={LixoIcon}
              alt="Icone para excluir Habito"
            />
          </ContainerHabit>
          <DayDisplayContainer>
            {days.map((day) => {
              return (
                <DayDisplay key={day.id} dayWeek={day} days={habit.days} />
              );
            })}
          </DayDisplayContainer>
        </>
      )}
    </HabitDiv>
  );
}
const ContainerHabit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HabitDiv = styled.div`
  width: 100%;
  padding: 1.5rem 1.5rem;
  margin-top: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  img {
    width: 20px;
    height: 20px;
    :hover {
      cursor: pointer;
    }
  }
  h4 {
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 300;
  }
`;
const DayDisplayContainer = styled.div`
  width: 100%;
  display: flex;
`;
