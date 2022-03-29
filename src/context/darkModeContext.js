import React, { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
    darkMode : false
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = (props) => {

    const [state , dispach] = useReducer(DarkModeReducer , INITIAL_STATE)

    return (
        <DarkModeContext.Provider value={{darkMode:state.darkMode , dispach}}>
            {props.children}
        </DarkModeContext.Provider>
    )

}