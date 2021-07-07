// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import statisticalData from "./components/statistics/statistical-data.json"
import Statistics from "./components/statistics/Statistics"
function App() {
  return (
    
    <Statistics stats={statisticalData} />
  );
}

export default App;
