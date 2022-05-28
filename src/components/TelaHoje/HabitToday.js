import styled from "styled-components";

export function HabitToday({ data }) {
  console.log(data);
  return (
    <Habit>
      <Icon>
        <Legenda>
          <h4>{data.name}</h4>
          <h6>Sequencia atual: {data.currentSequence} dias</h6>
          <h6>Seu recorde: {data.highestSequence} dias</h6>
        </Legenda>
        <ion-icon name="checkbox"></ion-icon>
      </Icon>
    </Habit>
  );
}
const Legenda = styled.div`
    display: flex;
    flex-direction: column;
    
    h6{
        font-weight: 300;
        font-family: 'Lexend Deca';
        font-size: 16px;
        margin-top: 5px;
        color: darkgray;
    }
     
    h4{
        font-weight: 500;
        font-family: 'Lexend Deca';
        font-size: 20px;
        margin-top: 5px;
        color: #000000;
    }
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 80px;
  color: #e5e5e5;
`;

const Habit = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 15px;
  padding: 1.5rem;
  background-color: white;

  h1 {
    font-family: "Lexend Deca";
    font-size: 20px;
    color: #000000;
    font-weight: 300;
  }
`;
