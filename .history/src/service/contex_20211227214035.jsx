import React, { createContext, useState } from 'react'


export const Contexto = createContext({})

export default function Provedor(props) {
    const [poke, setPoke] = useState()

        const user = {
            name:'Mikael',
        }
    return (
        <Contexto.Provider value={}>
            {prop}
        </Contexto.Provider>
    )
}
