

import { useState } from 'react';
import axios from 'axios';


import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [text, setText] = useState("")
  console.log(text)
  

  const apiKey = 'RGAPI-9b8910f9-1f24-4620-960d-327637ee553b'

  return (
    <>
      <div>
        <input type="text" onChange={e => setText(e.target.value)}></input>
          <button>Buscar</button>
      </div>
        <Home />



    </>
  );
}

export default App;
