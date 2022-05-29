import { Children, createContext, useContext, useState } from "react";

const UserProgressContext = createContext({});

export function UserProgressProvider({children}){

    const [progress, setProgress] = useState(0);
    
    function getPercentengeProgress(quantityHabits, habitsDone){
        const percentenge = (habitsDone/quantityHabits) * 100;
        setProgress(percentenge);
    }
    return(
        <UserProgressContext.Provider value={{progress, getPercentengeProgress}} >
            {children}
        </UserProgressContext.Provider>
        
    )
}

export const useUserProgress = () => useContext(UserProgressContext);

