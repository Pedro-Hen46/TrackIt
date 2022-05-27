import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState} from "react"

import styled from 'styled-components'
import Logo from '../../Images/Logo-TrackIT.png'
import { useUserLogged } from '../../context/UserLoggedProvider';


export default function TelaCadastro() {

    const [loading, setLoading] = useState(false);
    const [formContent, setFormContent] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    });

    const provideData = useUserLogged();
    console.log(provideData)

    const navigate = useNavigate();

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    function handleSubmit(event) {
        event.preventDefault();

        const promise = axios.post(URL, formContent);

        setLoading(true);

        promise.then(() => {
            alert('Parabens seu cadastro deu certo! clique em fazer login com os dados informados.');
            setFormContent({
                email: '',
                password: '',
                name: '',
                image: ''
            })
            setLoading(false)
            navigate("/");
        });

        promise.catch((error) => {
            alert('Não consegui finalizar o seu cadastro, por favor tente novamente.');
        })

    }

    return (

        <ContainerCadastro>
            <img src={Logo} alt='Logo TrackIT' />
            <form onSubmit={handleSubmit}>
                <input placeholder='Email' disabled={loading} value={formContent.email} type='email' onChange={(e) => setFormContent((state) => ({ ...state, email: e.target.value }))} />
                <input placeholder='Senha' disabled={loading} value={formContent.senha} type='password' onChange={(e) => setFormContent((state) => ({ ...state, password: e.target.value }))} />
                <input placeholder='Nome' disabled={loading} value={formContent.nome} type='text' onChange={(e) => setFormContent((state) => ({ ...state, name: e.target.value }))} />
                <input placeholder='Foto' disabled={loading} value={formContent.foto} type='url' onChange={(e) => setFormContent((state) => ({ ...state, image: e.target.value }))} />
                <button disabled={loading} >Cadastrar</button>
            </form>

            <Link to="/">
                <h3>Já tem uma conta? Faça login!</h3>
            </Link>
        </ContainerCadastro>

    )
}

const ContainerCadastro = styled.div`
    
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

        margin-left: 10%;

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
        margin-left: 10%;

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