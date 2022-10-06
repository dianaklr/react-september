// не контрольований компонент, тому що реакт не контролює стан інпутів

import './App.css';
import {createRef} from "react";

function App() {

    let login = createRef();
    let password = createRef();

    function onSubmit(e){
        console.log(login.current.value);
        console.log(password.current.value); //вивести поточне значення інпута
        // create obj API
        e.preventDefault(); // для того щоб сторінка не перезавантажувалась
    }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <input type="text" name={'login'} ref={login}/>
          <input type="text" name={'password'} ref={password}/>
        <button>submit</button>

      </form>

    </div>
  );
}

export default App;
