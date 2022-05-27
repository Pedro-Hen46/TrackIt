import { useUserLogged } from "../../context/UserLoggedProvider"

import styled from "styled-components";


export default function TelaHabitos() {

    const { saveDataUser } = useUserLogged(); //O token esta aqui dentro, aqui esta toda resposta da api

    return (
        <Container>
            <Header>
                <h1>TrackIt</h1>
                <img src={saveDataUser.image} />
            </Header>
            <Contents>
                <div>
                    <h3>Meus Hábitos</h3>
                    <button>+</button>
                </div>
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
            </Contents>
            <Footer>
                <h3>Hábitos</h3>
                <h3>Hoje</h3>
                <h3>Histórico</h3>
            </Footer>
        </Container>

    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Header = styled.div`

    background-color: #126BA5;
    width: 100%;
    height: 80px;

    position: fixed;
    padding: 30px;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 10px rgba(0,0,0, 0.4);
    h1{
        font-size: 40px;
        color: white;
        font-family: 'Playball';
    }

    img {
        width: 60px;
        height: 60px;

        border: thin solid white;

        border-radius: 50%;
        object-fit: cover;
    }
`
const Contents = styled.div`
    width: 100%;
    height: 92vh;
    margin-top: 80px;
    padding: 30px;
    background-color: #E5E5E5;

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        button{
            width: 40px;
            height: 35px;
            background-color: #52B6FF;
            border: thin solid #52B6FF;

            font-family: 'Lexend Deca';
            font-weight: 500;
            font-size: 20px;
            color: white;
        }
    }

    h3{
        font-family: 'Lexend Deca';
        font-size: 26px;
        color: #126BA5;
    }

    span{
        font-family: 'Lexend Deca';
        font-size: 18px;
        font-weight: 300;
        color: #666666;
    }

`
const Footer = styled.div`
    width: 100%;
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;

    h3{
        font-family: 'Lexend Deca';
        font-size: 22px;
        color: #52B6FF;
    }
`