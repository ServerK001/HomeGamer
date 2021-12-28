import React, { createContext, useState } from 'react'


export const AuthContext = createContext({})

export default function AuthProvider(props) {
    const [poke, setPoke] = useState()

        const user = {
            name:'Mikael',
        }
    return (
            <AuthContext.Provider> <AuthContext
    )
}
