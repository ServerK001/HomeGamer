import React from 'react'
import gameimg from '../../dashboard/images/steam.png'
import Cardsgames from './cardsGames/cardsgames'
import './style.scss'
import assassins from '../../dashboard'
export default function GamesProgress() {
    return (
            <div className="games">
                <div className="status">
                    <h1>Actice Games</h1>
                    <input type="text" />
                </div>
    
           <Cardsgames image={gameimg} />
           <Cardsgames image={gameimg} />
           <Cardsgames image={gameimg} />
           
                        
                    



 



                    
            </div>
    )
}
