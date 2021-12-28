

import { useState } from 'react';
import axios from 'axios';


import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [player, setPlayer] = useState("")
  console.log(text)
  
  const searchForPlayers = ()=>{
      const APICallString  = 'http://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + player + '?api_key' + apiKey

      axios.get(APICallString)
  }


  const apiKey = 'RGAPI-9b8910f9-1f24-4620-960d-327637ee553b'

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
