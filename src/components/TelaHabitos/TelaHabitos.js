import { Header } from "../Header";
import styled from "styled-components";
import { Footer } from "../Footer";
import { ButtonDay } from "../ButtonDay";
import { useState } from "react";

export default function TelaHabitos() {
  const [days, setDays] = useState([
    { id: 1, day: "D", active: false },
    { id: 2, day: "S", active: false },
    { id: 3, day: "T", active: false },
    { id: 4, day: "Q", active: false },
    { id: 5, day: "Q", active: false },
    { id: 6, day: "S", active: false },
    { id: 7, day: "S", active: false },
  ]);
  const [addHabit, setAddHabit] = useState(false);

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
            <input placeholder="nome do hábito"></input>
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
              <button>Salvar</button>
            </Buttons>
          </AddHabits>
        ) : (
          ""
        )}

        <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </span>
      </Contents>
      <Footer />
    </Container>
  );
}

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
