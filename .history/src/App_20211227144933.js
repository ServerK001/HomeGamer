import { useState } from 'react';
import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [text, setText] = useState("")
 console.log(searchText)
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
