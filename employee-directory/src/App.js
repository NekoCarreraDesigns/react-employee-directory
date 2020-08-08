import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Employee Directory
      <header className="App-header">
        <input className="search-bar" type="text" placeholder="Search Employee" />
        <button className="searchBtn" type="submit">Search</button>
      </header>
    </div>
  );
}

export default App;
