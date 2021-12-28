import React from 'react'
import './style.scss'
import twitch from './images/twitch.png'
import avatar from './images/avatar.png'  
import steam from './images/steam.png'  
import upcoming from './images/upcoming.png'  
import library from './images/library.png' 
import Game from './proGames/proGames'

export const Dashborad = () => {
    return (
            <div className="dashborad">
                    <div className="user">
                        <img src={avatar} alt="" />
                            <h3>User_Name</h3>
                                <p>Pro Menber</p>
                    </div>

                        <div className="links">
                                <div className="link">
                                <img src={twitch} />
                                        <h2>Streams</h2>
                                </div>
                        </div>

                        <div className="links">
                                <div className="link">
                                    <img src={steam} alt="" />
                                        <h2>Games</h2>
                                </div>
                        </div>

                        <div className="links">
                                <div className="link">
                                    <img src={upcoming} alt="" />
                                        <h2>New</h2>
                                </div>
                        </div>

                        <div className="links">
                                <div className="link">
                                    <img src={library} alt="" />
                                        <h2>Libray</h2>
                                </div>
                        </div>

                  <Game />

                 
            </div>
    )
}
