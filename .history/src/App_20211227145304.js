import { useState } from 'react';
import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [text, setText] = useState("")
 console.log(text)
  


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
