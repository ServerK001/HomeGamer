

import { useState } from 'react';
import axios from 'axios';


import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [player, setPlayer] = useState('')
  const apiKey = ""
  
  const searchForPlayers = (event)=>{
      var APICallString  = 'https://americas.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + player + '?api_key' + apiKey

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
