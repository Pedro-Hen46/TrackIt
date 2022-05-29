import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { useUserLogged } from "../../context/UserLoggedProvider";
import { useUserProgress } from "../../context/UserProgressProvider";
import { useEffect, useState } from "react";
import { HabitToday } from "./HabitToday";
import { ThreeDots } from "react-loader-spinner";

export function TelaHoje() {
  const { saveDataUser } = useUserLogged();
  const { getPercentengeProgress } = useUserProgress();
  const { progress } = useUserProgress();
  const [responseToday, setResponseToday] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${saveDataUser.token}`,
      },
    };
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((response) => setResponseToday(response.data));

    promise.catch(() => {
      console.log("Deu FALHA meu nego");
    });
  }, [saveDataUser.token]);

  const config = {
    headers: {
      Authorization: `Bearer ${saveDataUser.token}`,
    },
  };

  useEffect(() => {
    const habitsDone = responseToday.filter((state) => state.done);
    getPercentengeProgress(responseToday.length, habitsDone.length);
  }, [responseToday]);

  function habitDone(id, data) {
    setResponseToday((state) =>
      state.map((habit) => {
        if (habit.id === id) {
          return { ...habit, done: !habit.done };
        }
        return habit;
      })
    );
    if (data.done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        null,
        config
      );

      promise.then((response) => {
        console.log(data);
      });
      promise.catch((error) => {
        console.log(error);
      });
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        null,
        config
      );

      promise.then((response) => {
        console.log("dei o check no brabo: ",data);
      });
      promise.catch((error) => {
        console.log(error);
      });
    }
  }

  return (
    <>
      <Header />
      <ContainerHoje>
        <h1>{dayjs().locale("pt-br").format("dddd DD/MM")}</h1>

        {isNaN(responseToday) === false || progress === 0 ? (
          progress === 0 ? (
            <span>Nenhum hábito concluído ainda</span>
          ) : (
            ""
          )
        ) : progress === 100 ? (
          <ColorText>
            <h6>Parabéns vc terminou {progress}% dos hábitos de hoje 🎉 </h6>
          </ColorText>
        ) : (
          <ColorText>
            <h6>{progress}% dos hábitos concluídos</h6>
          </ColorText>
        )}
  
        {isNaN(responseToday) === false ? (
          <LoadingIcon>
            <ThreeDots color="darkgray" height={300} width={300} />
          </LoadingIcon>
        ) : (
          responseToday.map((habit, index) => (
            <HabitToday habitDone={habitDone} data={habit} key={index} />
          ))
        )}
      </ContainerHoje>
      <Footer />
    </>
  );
}
const ColorText = styled.div`
  h6 {
    font-weight: 400;
    font-size: 16px;
    font-family: "Lexend Deca";
    color: #8fc549;
  }
`;

const LoadingIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerHoje = styled.div`
  
  height: 200vh;
  background-color: #e5e5e5;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  margin-top: 80px;

  h1 {
    font-family: "Lexend Deca";
    font-size: 32px;
    font-weight: 400;
    color: #126ba5;
    margin-bottom: 10px;

    &::first-letter {
      text-transform: capitalize;
    }
  }
  span {
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 400;
    color: darkgray;
  }
`;
