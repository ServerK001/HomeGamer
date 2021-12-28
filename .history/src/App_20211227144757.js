import React, { useState } from 'react';
import Home from './components/header/header';
import './css/App.scss'

function App() {
 
 const [searchText, setSeachText] = useState("")
 console.log(set)
  return (
    <>
      <div>
        <input type="text" onCanPlay={e => setSeachText(e.target.value)}></input>
          <button>Buscar</button>
      </div>
        <Home />



    </>
  );
}

export default App;
