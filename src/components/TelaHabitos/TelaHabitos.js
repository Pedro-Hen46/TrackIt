import { useUserLogged } from "../../context/UserLoggedProvider"


export default function TelaHabitos() {

    const { token } = useUserLogged();

    return (
        <h1> {token}</h1>
    )
}