import React, { useState } from 'react';
import Home from './components/header/header';
import './css/App.scss'

function App() {
 
 const [playes] = useState()
  return (
    <>
      <div>
        <input type="text"></input>
          <button>Buscar</button>
      </div>
        <Home />



    </>
  );
}

export default App;
