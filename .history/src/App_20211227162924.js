

import { useState } from 'react';
import axios from 'axios';


import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [player, setPlayer] = useState(1)
  const API_KEY = "RGAPI-9b8910f9-1f24-4620-960d-327637ee553b"
  
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
          <strong{JSON.stringify(player)}
      </div>
        <Home />



    </>
  );
}

export default App;
