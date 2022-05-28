import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import Logo from "../../Images/Logo-TrackIT.png";
import { useUserLogged } from "../../context/UserLoggedProvider";

import { Bars } from "react-loader-spinner";

export default function TelaInicial() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [loading, setLoading] = useState(false);

  const { saveDataUserLogged } = useUserLogged();
  const navigate = useNavigate();

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  function handleSubmit(event) {
    event.preventDefault();

    const dados = {
      email: email,
      password: senha,
    };

    const promise = axios.post(URL, dados);

    setLoading(true);

    promise.then((response) => {
      saveDataUserLogged(response.data);
      navigate("/habitos");
    });
    promise.catch((error) => {
      alert("Usuário o senha digitados incorretamente, tentar novamente");
    });
    promise.finally(() => setLoading(false));
  }

  return (
    <Container>
      <img src={Logo} alt="Logo TrackIT" />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <input
          placeholder="Senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
          disabled={loading}
        />
        <button disabled={loading}>
          {loading ? <Bars color="#FFFFFF" height={24} width={24} /> : "Entrar"}
        </button>
      </form>

      <Link to="/cadastro">
        <h3>Não tem uma conta? Cadastre-se agora!</h3>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 220px;
  }

  input {
    width: 80%;
    height: 40px;
    margin-bottom: 10px;

    border: thin solid lightgray;
    border-radius: 5px;
    padding: 10px;

    margin-left: 10%;
  }

  button {
    width: 80%;
    height: 40px;

    background-color: #52b6ff;
    border: thin solid #52b6ff;
    color: white;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10%;

    font-size: 20px;
    font-family: "Lexend Deca";
    font-weight: 300;
  }
  h3 {
    font-size: 14px;
    font-family: "Lexend Deca";
    font-weight: 300;
    color: #52b6ff;

    text-decoration: none;
  }
`;
