import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { useUserProgress } from "../context/UserProgressProvider";

import 'react-circular-progressbar/dist/styles.css';

export function Footer() {
  const { progress } = useUserProgress();
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <h3 onClick={() => navigate("/habitos")}>Hábitos</h3>

      <Hoje onClick={() => navigate("/hoje")}>
      <CircularProgressbar
        value={progress}
        text="Hoje"
        background
        backgroundPadding={6}
        styles={{
          text: {
            fontFamily: "Lexend Deca",
            fill: "#FFFFFF",
          },
          background: {
            fill: '#3e98c7',
          },
          trail: {
            // Trail color
            stroke: '#3e98c7',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Rotate the trail
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          path: {
            // Path color
            stroke: `#ffffff`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
            // Rotate the path
            transform: 'rotate(0.0turn)',
            transformOrigin: 'center center',
          },
          
        }}
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
  z-index: 1;
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
