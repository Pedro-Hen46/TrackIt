import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

import styled from 'styled-components'
import Logo from '../../Images/Logo-TrackIT.png'

export default function TelaCadastro() {

    // const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    // const promise = axios.post(URL, Dados);



    return (

        <Container>
            <img src={Logo} alt='Logo TrackIT' />
            <input placeholder='Email' type='email' />
            <input placeholder='Senha' type='password' />
            <input placeholder='Nome' type='text' />
            <input placeholder='Foto' type='url' />
            <button>Cadastrar</button>

            <Link to="/">
                <h3>Já tem uma conta? Faça login!</h3>
            </Link>
        </Container>


    )
}

const Container = styled.div`
    
    width: 100vh;
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