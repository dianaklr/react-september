// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)

import './App.css';
import Users from "./users/Users";


function App() {
  return (
    <div className="App">
      <Users/>
    </div>
  );
}

export default App;
