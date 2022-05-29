import axios from "axios";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";


export function TelaHistorico() {
  
  
  
  return (
    <>
      <Header />
      <ContainerHoje>
      <h3>Histórico</h3>
      <span>Em breve você poderá ver seu histórico dos seus hábitos aqui</span>
      </ContainerHoje>
      <Footer />
    </>
  );
}

const ContainerHoje = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  padding: 2rem;
  height: 100vh;
  margin-top: 80px;

  h3 {
    font-family: "Lexend Deca";
    font-size: 26px;
    color: #126ba5;
    margin-bottom: 5px;
  }
  span {
    font-family: "Lexend Deca";
    font-size: 18px;
    font-weight: 300;
    color: #666666;
  }
`;


