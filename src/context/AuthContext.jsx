import { createContext } from "react";
import { useState } from "react";

const initialState ={
    user: null, // información del usuario
isAuthenticated: false, // si está o no logueado
toggleAuth: () => null, // función para actualizar el contexto
}



export const AuthContext = createContext(initialState)

//componente provider

const AuthContextProvider = ({children})=>{
    const [isLoggedId , setIsLoggedId] = useState(
        {user: null,
        isAuthenticated: false,
        }
    )
    const toggleAuth = (user)=>{
        setIsLoggedId({
            user:user,
            isAuthenticated:!isLoggedId.isAuthenticated
        })
    }

    return <AuthContext.Provider value={{...isLoggedId, toggleAuth}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider