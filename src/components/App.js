import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastro from "./TelaCadastro/TelaCadastro";
import TelaInicial from "./TelaInicial/TelaInicial";
import TelaHabitos from "./TelaHabitos/TelaHabitos";

import { UserLoggedProvider } from "../context/UserLoggedProvider";
import { TelaHoje } from "./TelaHoje/TelaHoje";
import { TelaHistorico } from "./TelaHistorico/TelaHistorico";


export default function App() {

    return (
        <UserLoggedProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicial />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                    <Route path="/historico" element={<TelaHistorico />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                </Routes>
            </BrowserRouter>
        </UserLoggedProvider>
    )
}