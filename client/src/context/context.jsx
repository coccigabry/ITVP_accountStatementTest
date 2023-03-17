import { createContext, useContext, useReducer } from "react"
import axios from 'axios'
import reducer from "./reducer"


const INITIAL_STATE = {
    isUserLogged: false,
    isFileImported: false,
    data: []
}


const AppContext = createContext()


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


    // reduce functions
    const login = () => dispatch({ type: 'LOGIN' })

    const importFile = () => dispatch({ type: 'IMPORT_FILE' })

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/account/retrieve')
            const fetchedData = res.data
            dispatch({ type: 'FETCH_DATA', payload: fetchedData })
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <AppContext.Provider value={{
            ...state,
            login,
            importFile,
            fetchData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider }