import React, { createContext, useState } from 'react'


export const AuthContext = createContext({})

export default function Provedor(props) {
    const [poke, setPoke] = useState()

        const user = {
            name:'Mikael',
        }
    return (
        <Contexto.Provider value={ {user} }>
            
        </Contexto.Provider>
    )
}
