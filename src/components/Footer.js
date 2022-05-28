import styled from "styled-components"

export function Footer() {

    return (
        <FooterContainer>
            <h3>Hábitos</h3>
            <h3>Hoje</h3>
            <h3>Histórico</h3>
        </FooterContainer>
    )
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

    h3{
        font-family: 'Lexend Deca';
        font-size: 22px;
        color: #52B6FF;
    }
`