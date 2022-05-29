import { useUserLogged } from '../context/UserLoggedProvider';
import styled from 'styled-components';

export function Header() {

    const { saveDataUser } = useUserLogged(); //O token esta aqui dentro, aqui esta toda resposta da api

    return (
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src={saveDataUser.image} />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`

    background-color: #126BA5;
    width: 100%;
    height: 80px;

    position: fixed;
    z-index: 1;
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
        box-shadow: 0px 0px 10px rgba(0,0,0, 0.6);
    }
`