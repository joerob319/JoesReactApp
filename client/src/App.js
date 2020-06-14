import React from 'react';
import WeightForm from './Components/Form'
import HeaderImage from './Components/HeaderImage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderImage />
        <WeightForm />
      </header>
    </div>
  );
}

export default App;
