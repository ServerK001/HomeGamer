import Home from './components/header/header';
import './css/App.scss'

function App() {
 
  const [text, set]
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