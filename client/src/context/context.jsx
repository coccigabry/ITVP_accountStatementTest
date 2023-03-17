import { createContext, useState } from "react";


const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [isUserLogged, setIsUserLogged] = useState(false)
    const [isFileImported, setIsFileImported] = useState(false)


    const login = () => setIsUserLogged(true)
    const importFile = () => setIsFileImported(true)


    return (
        <AuthContext.Provider value={{ isUserLogged, login, isFileImported, importFile }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }