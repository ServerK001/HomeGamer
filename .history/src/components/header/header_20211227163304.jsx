import React from 'react'
import { Dashborad } from '../dashboard/dashborad'
import GamesProgress from './GamesProgress/GamesProgress'

import    './style.scss'
export default function Home(props) {
    return (

        <main>
            <section className="glass">

                <Dashborad name= />
            

                <GamesProgress />

            </section>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </main>
    )
}
