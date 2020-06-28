import React from 'react';
import WeightForm from './Components/Form'
import HeaderImage from './Components/HeaderImage'
import './App.css';
import WeightGrid from './Components/WeightGrid';
import WeightGraph from './Components/WeightGraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderImage />
        <WeightForm />
        <WeightGrid />
      </header>
    </div>
  );
}

export default App;
