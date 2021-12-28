

import { useState } from 'react';
import axios from 'axios';


import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  

  

  return (
    <>
      <div>
        <input type="text" onChange={e => setPlayer(e.target.value)}></input>

          <button  onClick={e => searchForPlayers(e)}>Buscar</button>
          
      </div>
        <Home  />



    </>
  );
}

export default App;
