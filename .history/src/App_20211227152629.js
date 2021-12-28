

import { useState } from 'react';
import axios from 'axios';


import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [player, setPlayer] = useState('')
  const API_KEY = "RGAPI-9b8910f9-1f24-4620-960d-327637ee553b"
  
  const searchForPlayers = (event)=>{
      var APICallString  = 'https://americas.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + player + "?api_" + API_KEY

      axios.get(APICallString).then( function res (){
          //successs
          console.log(res)
      }).catch( function error (){
          //Error

      })
      
      
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
