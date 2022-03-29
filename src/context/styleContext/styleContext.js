import {createContext , useReducer} from "react"
import StyleReducer from "./styleReducer"


const INITIAL_STATE = {
    Open : false
}

export const StyleContext = createContext(INITIAL_STATE)


export const StyleContextProvider = (props) => {
    const [state , dispach] = useReducer(StyleReducer , INITIAL_STATE)

    return(
        <StyleContext.Provider value={{Open:state.Open , dispach}}>
            {props.children}
        </StyleContext.Provider>
    )
}
