import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useUserLogged } from "../../context/UserLoggedProvider";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { ButtonDay } from "../ButtonDay";
import { ThreeDots } from "react-loader-spinner";
import Habit from "./Habit";

export default function TelaHabitos() {
  const { saveDataUser } = useUserLogged();

  const config = {
    headers: {
      Authorization: `Bearer ${saveDataUser.token}`,
    },
  };

  const [days, setDays] = useState([
    { id: 0, day: "D", active: false },
    { id: 1, day: "S", active: false },
    { id: 2, day: "T", active: false },
    { id: 3, day: "Q", active: false },
    { id: 4, day: "Q", active: false },
    { id: 5, day: "S", active: false },
    { id: 6, day: "S", active: false },
  ]);

  const [addHabit, setAddHabit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputHabit, setInputHabit] = useState("");
  const [responseHabits, setResponseHabits] = useState([]);

  //PEGAR INFORMACAO DO BOTAO SENDO CLICADO
  function handleDayActive(dayID) {
    setDays((state) =>
      state.map((item) => {
        if (item.id === dayID) {
          return { ...item, active: !item.active };
        }
        return item;
      })
    );
  }

  //PEGANDO HABITOS QUE ESTAO NA API
  useEffect(() => {
    setLoading(true);
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise.then((response) => setResponseHabits(response.data));

    promise.finally(() => setLoading(false));
  }, []);

  //MANDANDO NOVOS HABITOS PARA A API
  function sendHabitsToApi() {
    const idDaysSelected = [];

    days.map((day) => {
      if (day.active === true) {
        idDaysSelected.push(day.id);
      }
      return day;
    });

    const dataHabit = {
      name: inputHabit,
      days: idDaysSelected,
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      dataHabit,
      config
    );

    promise.then((response) => {
      setAddHabit(false);
      setResponseHabits([...responseHabits, response.data]);
    });

    promise.catch((error) => console.log(error));
  }

  return (
    <Container>
      <Header />
      <Contents>
        <MyHabits>
          <h3>Meus Hábitos</h3>
          <button onClick={() => setAddHabit(true)}>+</button>
        </MyHabits>

        {addHabit ? (
          <AddHabits>
            <input
              placeholder="nome do hábito"
              onChange={(e) => setInputHabit(e.target.value)}
            ></input>
            <div>
              {days.map((item, index) => (
                <ButtonDay
                  handleDayActive={handleDayActive}
                  key={index}
                  data={item}
                />
              ))}
            </div>
            <Buttons>
              <h6 onClick={() => setAddHabit(false)}>Cancelar</h6>
              <button onClick={() => sendHabitsToApi()}>Salvar</button>
            </Buttons>
          </AddHabits>
        ) : (
          ""
        )}
        {loading ? (
          <LoadingIcon>
            <ThreeDots color="darkgray" height={300} width={300} />
          </LoadingIcon>
        ) : responseHabits.length === 0 ? (
          <span>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </span>
        ) : (
          ""
        )}

        {responseHabits.map((habit, index) => (
          <Habit habit={habit} key={index} id={habit.id} />
        ))}
      </Contents>
      <Footer />
    </Container>
  );
}
const LoadingIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;
  h6 {
    color: #52b6ff;
    font-family: "Lexend Deca";
    margin-right: 10px;

    :hover {
      cursor: pointer;
    }
  }
  button {
    width: 80px;
    height: 35px;
    color: #ffffff;
    font-family: "Lexend Deca";
    background-color: #52b6ff;
    border: thin solid #52b6ff;
    border-radius: 5px;
    :hover {
      cursor: pointer;
    }
  }
`;

const MyHabits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  button {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border: thin solid #52b6ff;

    font-family: "Lexend Deca";
    font-weight: 500;
    font-size: 20px;
    color: white;
    transition: 0.3s all;

    :hover {
      cursor: pointer;
      font-size: 22px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

const AddHabits = styled.div`
  width: 100%;
  height: 180px;

  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-radius: 5px;

  background-color: #ffffff;
  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: thin solid #e5e5e1;
    border-radius: 5px;

    margin-bottom: 10px;
  }
  div {
    display: flex;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  width: 100%;
  height: 92vh;
  margin-top: 80px;
  padding: 30px;
  background-color: #e5e5e5;

  h3 {
    font-family: "Lexend Deca";
    font-size: 26px;
    color: #126ba5;
  }

  span {
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 300;
    color: #666666;
  }
`;
