import { createContext, useContext, useState } from "react";

const UserLoggedContext = createContext({});

export function UserLoggedProvider({ children }) {

    const [userLogged, setUserLogged] = useState(() => {
        const userStorage = JSON.parse(localStorage.getItem('@user'));
        if (userStorage) {
            return userStorage;
        } 
        return {};
    })

    function saveDataUserLogged(data) {
        setUserLogged(data);
        localStorage.setItem('@user', JSON.stringify(data));
    }

    return (
        <UserLoggedContext.Provider value={{ saveDataUserLogged, 
userLogged }}>
            {children}
        </UserLoggedContext.Provider>
    )
}
const useUserLogged = () => useContext(UserLoggedContext)
export { useUserLogged }

