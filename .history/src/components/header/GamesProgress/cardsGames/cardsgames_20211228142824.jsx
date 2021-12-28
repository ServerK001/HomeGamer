import React from 'react'
import './styles.scss'

export default function Cardsgames(props) {
    return (
     <div className="cards">
                <div className="card">
                    <img src={props.image}  />
                    <div className="card-info">
                        <h2>Name_Game</h2>
                        <p>PS5 Version</p>
                                <div className="progress"></div>
                    </div>
                </div>
            <h2 className="porcentage">60%</h2>
     </div>
    )
}
