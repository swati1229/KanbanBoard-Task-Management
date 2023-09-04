import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState()

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo')

        if(userInfo) {
            setUser(JSON.parse(userInfo))
        }
    },[])

    return (
        <AuthContext.Provider
            value={[user, setUser]}
        >
            {children}
        </AuthContext.Provider>
    )
}

const AuthState = () => useContext(AuthContext)

export {AuthProvider, AuthState}
