import { createContext, useContext, useState } from "react";

const UserLoggedContext = createContext({});

export function UserLoggedProvider({ children }) {

    const [token, setToken] = useState(() => {
        const tokenStorage = JSON.parse(localStorage.getItem('@token'));
        if (tokenStorage) {
            return tokenStorage;
        } 
        return {};
    })

    function saveDataUserLogged(data) {
        setToken(data.token);
        localStorage.setItem('@token', JSON.stringify(data.token));
    }

    return (
        <UserLoggedContext.Provider value={{ saveDataUserLogged, token }}>
            {children}
        </UserLoggedContext.Provider>
    )
}
const useUserLogged = () => useContext(UserLoggedContext)
export { useUserLogged }

