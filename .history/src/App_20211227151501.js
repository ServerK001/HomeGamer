

import { useState } from 'react';
import axios from 'axios';


import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [player, setPlayer] = useState("")
  
  
  const searchForPlayers = ()=>{
      const APICallString  = 'http://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + player + '?api_key' + apiKey

      axios.get(APICallString).then( res => setPlayer(res.data))
      console.log(player)
  }


  

  return (
    <>
      <div>
        <input type="text" onChange={e => setPlayer(e.target.value)}></input>

          <button  onClick={e => searchForPlayers(e)}>Buscar</button>
      </div>
        <Home />



    </>
  );
}

export default App;