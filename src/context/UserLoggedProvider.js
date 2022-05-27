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

    const [saveDataUser, setDataStorage] = useState((() => {
        const dataUserStorage = JSON.parse(localStorage.getItem('@dataUser')); 
        if (dataUserStorage) {
            return dataUserStorage;
        } 
        return {};  
    }))

    function saveDataUserLogged(data) {
        setToken(data.token);
        setDataStorage(data);

        localStorage.setItem('@token', JSON.stringify(data.token));
        localStorage.setItem('@dataUser', JSON.stringify(data));
    }

    return (
        <UserLoggedContext.Provider value={{ saveDataUserLogged, token, saveDataUser }}>
            {children}
        </UserLoggedContext.Provider>
    )
}
const useUserLogged = () => useContext(UserLoggedContext)
export { useUserLogged }

