import styled from "styled-components"

import { Footer } from "../Footer"
import { Header } from "../Header"

export function TelaHoje(){

    return(
        <>  
        <Header />
        <ContainerHoje> 
        <h1>EU SOU A TELA Hoje</h1>
        </ContainerHoje>
        <Footer />
        </>
    )
}

const ContainerHoje = styled.div`
    background-color: #e5e5e5;
    width: 100%;
    height: 100vh;

    margin-top: 80px;

`