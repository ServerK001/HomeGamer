import React, { createContext, useState } from 'react'


export const Contexto = createContext()

export default function Provedor() {
    const [poke, setPoke] = useState()

    return (
        <Contexto.Provider>
            
        </Contexto.Provider>
    )
}
