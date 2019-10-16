import React from 'react';
import './App.css';
import './components/DotoList';
import DotoList from './components/DotoList';

function App() {
  let dotos = [
    { id: 1, completed: false, title: 'Купить хлеб'},
    {
      id: 2,
      completed: false,
      title: 'Купить масло'
    },
    {
      id: 3,
      completed: false,
      title: 'Купить молоко'
    },
  ]

  function toggleDoto(id) {
    dotos = dotos.map(doto => {
      if (doto.id === id) {
        doto.completed = !doto.completed
      }
      return doto
    })
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Doto</h1>
        <DotoList dotos={dotos} onToggle={toggleDoto} />
      </header>
    </div>
  );
}

export default App;
