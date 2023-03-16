import { createContext, useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useState(false)
    const [fileImported, setFileImported] = useState(false)

    const login = () => setUserLogged(!userLogged)

    return (
        <AuthContext.Provider value={{ userLogged, login, fileImported }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }