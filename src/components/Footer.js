import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export function Footer() {
  const navigate = useNavigate();
  const percentage = 80;
  return (
    <FooterContainer>
      <h3 onClick={() => navigate("/habitos")}>Hábitos</h3>

      <Hoje onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          value={percentage}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Hoje>

      <h3 onClick={() => navigate("/historico")}>Histórico</h3>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;

  h3 {
    font-family: "Lexend Deca";
    font-size: 22px;
    color: #52b6ff;

    :hover {
      cursor: pointer;
    }
  }
`;

const Hoje = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 50px;

  :hover {
    cursor: pointer;
    width: 122px;
    height: 122px;
  }
`;
