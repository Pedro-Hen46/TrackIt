import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastro from "./TelaCadastro/TelaCadastro";
import TelaInicial from "./TelaInicial/TelaInicial";
import TelaHabitos from "./TelaHabitos/TelaHabitos";

import { UserLoggedProvider } from "../context/UserLoggedProvider";

export default function App() {

    return (
        <UserLoggedProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaInicial />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                </Routes>
            </BrowserRouter>
        </UserLoggedProvider>
    )
}