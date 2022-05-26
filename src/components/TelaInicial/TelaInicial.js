import styled from 'styled-components'
import Logo from '../../Images/Logo-TrackIT.png'

import { Link } from "react-router-dom"

export default function TelaInicial() {

    

    return (

        <Container>
            <img src={Logo} alt='Logo TrackIT' />
            <input placeholder='Email' type='email' />
            <input placeholder='Senha' type='password' />
            <button>Entrar</button>

            <Link to="/cadastro">
                <h3>Não tem uma conta? Cadastre-se agora!</h3>
            </Link>
        </Container>


    )
}

const Container = styled.div`
    
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content : center;
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
        
    }

    button {
        width: 80%;
        height: 40px;

        background-color: #52B6FF;
        border: thin solid #52B6FF;
        color: white;
        margin-bottom: 20px;

        font-size: 20px;
        font-family: 'Lexend Deca';
        font-weight: 300;
    }
    h3 {
        font-size: 14px;
        font-family: 'Lexend Deca';
        font-weight: 300;    
        color: #52B6FF;

        text-decoration:none;
    }
`;
