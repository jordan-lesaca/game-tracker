import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((r) => r.json().then((user) => setUser(user))
    )
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>HOME</h1>
      </header>
    </div>
  );
}

export default App;