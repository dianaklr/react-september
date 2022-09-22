import Characters from "./components/characters/Characters";

import './components/characters/Character.css';

function App() {
  return (
    <div className="App">

        <div className={`header`}>
            <h1>The Rick and Morty API</h1>
        </div>

      <Characters/>

    </div>
  );
}

export default App;
