import './App.css';
import { useState, useEffect } from 'react'
import Games from './Games'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <Games user={user} />
      </header>
    </div>
  );
}

export default App;