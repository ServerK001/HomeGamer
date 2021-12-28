

import { useState } from 'react';
import axios from 'axios';


import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [player, setPlayer] = useState(1)
  
  
  const searchForPlayers = (event)=>{
      var URL  = "https://pokeapi.co/api/v2/pokemon/" + player 

        axios.get(URL).then(res => setPlayer(res.data))
        console.log(player)
     
      
      
  }

  

  return (
    <>
      <div>
        <input type="text" onChange={e => setPlayer(e.target.value)}></input>

          <button  onClick={e => searchForPlayers(e)}>Buscar</button>
          <strong>{player.name}</strong>
      </div>
        <Home name />



    </>
  );
}

export default App;
